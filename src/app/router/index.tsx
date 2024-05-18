import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PostsPage } from '@pages/posts';
import { RootPage } from '@pages/root';
import { Layout } from '../layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
    ],
  },
  {
    path: '*',
    element: 'Not found',
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
