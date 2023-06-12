import { Outlet } from 'react-router-dom';
import { ActiveLink } from '../../components/ActiveLink';

const Admin = () => {
  return (
    <>
      <nav className="mt-3 flex justify-center gap-4">
        {[
          ['Manage Classes', '/dashboard'],
          ['Manage Users', 'manage/users'],
        ].map(([title, url], i) => (
          <ActiveLink title={title} key={i} to={url} />
        ))}
      </nav>
      <Outlet />
    </>
  );
};
export default Admin;
