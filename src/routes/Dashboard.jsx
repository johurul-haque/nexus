import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Admin from '../Layouts/dashboard/Admin';
import Instructor from '../Layouts/dashboard/Instructor';
import Student from '../Layouts/dashboard/Student';
import Animate from '../components/Animate';
import { AuthContext } from '../providers/Authenticate';

const Dashboard = () => {
  const { role } = useContext(AuthContext);
  console.log(role);
  return (
    <>
      <Helmet>
        <title>Dashboard - Nexus</title>
      </Helmet>

      <Animate className="container-padding  mb-10 mt-7">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-2xl font-medium text-fuchsia-950 lg:text-3xl lg:font-semibold">
            Dashboard
          </h1>
          {role == 'admin' ? (
            <Admin />
          ) : role == 'instructor' ? (
            <Instructor />
          ) : (
            <Student />
          )}
        </div>
      </Animate>
    </>
  );
};
export default Dashboard;
