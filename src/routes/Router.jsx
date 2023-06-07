import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Login from './Login';
import Register from './Register';
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
      {
        path: '/signin',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Register />,
      },
    ],
  },
]);

export default router;
