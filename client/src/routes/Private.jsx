import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/Authenticate';

// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();

  if (loading) {
    return;
  }

  if (user) {
    return children;
  }
  return <Navigate to={'/signin'} state={{ from: location }} replace />;
};
export default Private;
