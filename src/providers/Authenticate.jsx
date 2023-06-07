import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Authenticate = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const authInfo = {
    user: 'John',
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default Authenticate;
