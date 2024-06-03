import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PostsPage } from '@pages/posts';
import { RootPage } from '@pages/root';
import { SchedulePage } from '@pages/schedule';
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
      {
        path: '/schedule',
        element: <SchedulePage />,
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
