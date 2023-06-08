import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/config';

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Authenticate = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const popupLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const logOut = () => signOut(auth);

  const authInfo = {
    auth,
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    popupLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default Authenticate;
