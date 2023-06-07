import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AuthContext } from '../providers/Authenticate';

const Root = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header />
      {loading ? (
        <div className="grid flex-1 place-items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex-1 transition-all duration-300">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};
export default Root;
