import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Root from './root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <h1 className="flex-1">Hello world!</h1>,
      },
    ],
  },
]);

export default router;
