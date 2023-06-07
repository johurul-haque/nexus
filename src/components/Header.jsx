import { Link } from 'react-router-dom';
import { ActiveLink } from './ActiveLink';
import Logo from './Logo';

const Header = () => {
  const user = {
    name: 'Michael',
    email: 'anpch@example.com',
  };

  const toggleMenu = () => {
    const nav = document.querySelector('#main-nav');
    nav.classList.toggle('max-sm:scale-0');
    nav.classList.toggle('max-sm:opacity-0');
    nav.toggleAttribute('aria-hidden');
  };

  return (
    <header className="sticky top-0 border-b border-fuchsia-200/50 bg-white py-2">
      <div className="container-padding mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <button
          onClick={toggleMenu}
          className="rounded-full bg-fuchsia-50/70 p-2 transition-colors duration-200 hover:bg-fuchsia-100/70 sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Open menu</span>
        </button>
        <nav
          id="main-nav"
          aria-hidden="true"
          className="right-6 top-6 grid origin-top-right items-center gap-x-7 rounded bg-white transition-all duration-200 max-sm:absolute max-sm:w-44 max-sm:scale-0 max-sm:p-6 max-sm:opacity-0 max-sm:shadow sm:flex lg:gap-x-10"
        >
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-4 text-gray-700/60 sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="aspect-square w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Close Menu</span>
          </button>
          <ul className="gap-x-7 max-sm:space-y-3 sm:flex lg:gap-x-10">
            {[
              ['Home', '/'],
              ['Instructors', '/instructors'],
              ['Classes', '/classes'],
            ].map(([title, url], i) => (
              <li key={i} onClick={toggleMenu}>
                <ActiveLink title={title} to={url} />
              </li>
            ))}
            {user && (
              <li onClick={toggleMenu}>
                <ActiveLink title={'Dashboard'} to={'/dashboard'} />
              </li>
            )}
          </ul>

          {user ? (
            <>
              <img
                width={60}
                height={60}
                src="wheeltopia.jpg"
                alt="wheeltopia"
                className="aspect-square w-10 rounded-full object-cover max-sm:mt-3"
              />
            </>
          ) : (
            <Link to={'/signin'} className="max-sm:mt-3">
              Sign-in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
