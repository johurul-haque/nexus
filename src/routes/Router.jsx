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
import OnlyInstructor from './OnlyInstructor';
import Payment from './Payment';
import Private from './Private';
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
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
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
        path: '/payment/:id',
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_SERVER}/create-payment-intent/${params.id}`
          ),
      },
      {
        path: '/dashboard/manage/class',
        element: (
          <OnlyInstructor>
            <AddClass />
          </OnlyInstructor>
        ),
      },
    ],
  },
]);

export default router;
