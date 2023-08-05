import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/Authenticate';

// eslint-disable-next-line react/prop-types
const OnlyInstructor = ({ children }) => {
  const { role } = useContext(AuthContext);
  let location = useLocation();

  if (role === 'instructor') {
    return children;
  }

  return <Navigate to={'/dashboard'} state={{ from: location }} replace />;
};
export default OnlyInstructor;
