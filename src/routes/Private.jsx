import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/Authenticate';

const Private = () => {
  const { user, loading } = useContext(AuthContext);
  return <Navigate to={'/login'} />;
};
export default Private;
