import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Root;
