import { createContext } from 'react';

const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Authenticate = ({ children }) => {
  const authInfo = {
    user: 'John',
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default Authenticate;
