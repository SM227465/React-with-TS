import { ReactNode, createContext, useContext, useReducer } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
  const timersContext = useContext(TimersContext);

  if (timersContext === null) {
    throw new Error('TimersContext is null');
  }

  return timersContext;
};

type StartTimersAction = {
  type: 'START_TIMERS';
};

type StopTimersAction = {
  type: 'STOP_TIMERS';
};

type AddTimersAction = {
  type: 'ADD_TIMER';
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimersAction;

type Props = {
  children: ReactNode;
};

const timersReducer = (state: TimersState, action: Action): TimersState => {
  if (action.type === 'START_TIMERS') {
    return { ...state, isRunning: true };
  }

  if (action.type === 'STOP_TIMERS') {
    return { ...state, isRunning: false };
  }

  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [...state.timers, { name: action.payload.name, duration: action.payload.duration }],
    };
  }

  return state;
};

const TimersContextProvider = (props: Props) => {
  const { children } = props;

  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,

    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },

    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },

    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };

  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
};

export default TimersContextProvider;
