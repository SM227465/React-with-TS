import { type ReactNode, useEffect, useState } from 'react';
import { get } from './utils/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fetchingImage from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

interface RawDataBlogPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((blogPost) => ({
          id: blogPost.id,
          title: blogPost.title,
          text: blogPost.body,
        }));

        setPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setApiError(error.message);
        }
      }

      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (apiError) {
    content = <ErrorMessage text={apiError} />;
  }

  if (posts.length) {
    content = <BlogPosts posts={posts} />;
  }

  if (isLoading) {
    content = <p id='loading-fallback'>Fetching posts..</p>;
  }

  return (
    <main>
      <img src={fetchingImage} alt='An abstract image depicting a data fetching process' />

      {content}
    </main>
  );
}

export default App;
