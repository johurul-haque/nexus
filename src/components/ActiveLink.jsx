/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export const ActiveLink = ({ to, title }) => {
  // ! Don't remove the empty string from line 14. It's for separation between the classes

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive
          ? `bg-gradient-to-r from-violet-600 from-50% to-fuchsia-500 bg-clip-text text-transparent`
          : `hover:bg-gradient-to-r hover:from-violet-600 hover:from-50% hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent`) +
        ' ' +
        'rounded-sm outline-none ring-fuchsia-500 ring-offset-4 transition-all duration-200 focus-visible:ring-1'
      }
    >
      {title}
    </NavLink>
  );
};
