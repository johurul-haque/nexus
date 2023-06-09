import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Instructors from './Instructors';
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
        element: <Home />,
      },
      {
        path: '/signin',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Register />,
      },
      {
        path: '/instructors',
        element: <Instructors />,
      },
    ],
  },
]);

export default router;
