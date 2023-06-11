import { useState } from 'react';
import Admin from '../Layouts/dashboard/Admin';
import Instructor from '../Layouts/dashboard/Instructor';
import Student from '../Layouts/dashboard/Student';
import Animate from '../components/Animate';

const Dashboard = () => {
  const [role] = useState('instructor');

  return (
    <Animate className="container-padding mx-auto mb-10 mt-7 max-w-7xl">
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
    </Animate>
  );
};
export default Dashboard;
