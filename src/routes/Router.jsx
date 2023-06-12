import { createBrowserRouter } from 'react-router-dom';
import AddClass from './AddClass';
import Classes from './Classes';
import Dashboard from './Dashboard';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Instructors from './Instructors';
import Login from './Login';
import ManageClasses from './ManageClasses';
import ManageUsers from './ManageUsers';
import Payment from './Payment';
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
      {
        path: '/classes',
        element: <Classes />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'manage/users',
            element: <ManageUsers />,
          },
          {
            path: '/dashboard',
            element: <ManageClasses />,
          },
        ],
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      {
        path: '/classes/add',
        element: <AddClass />,
      },
    ],
  },
]);

export default router;
