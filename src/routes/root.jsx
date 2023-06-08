import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AuthContext } from '../providers/Authenticate';

const Root = () => {
  const { loading } = useContext(AuthContext);
  const pathname = useLocation();

  /*  window.addEventListener('load', () => {
    const preloading = document.querySelector('#preloading');
    preloading.classList.add('opacity-0');
    preloading.setAttribute('aria-hidden', 'true');
  }); */

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Design Nexus</title>
      </Helmet>

      {/* <Preloading /> */}

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
