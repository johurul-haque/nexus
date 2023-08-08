import { Link } from 'react-router-dom';
import logo from '../assets/svg/Logo.svg';

const Logo = () => {
  return (
    <Link
      to={'/'}
      title="Design Nexus Home"
      className="ring-outline flex max-w-fit items-center gap-2 rounded-sm text-lg font-semibold sm:text-xl"
    >
      <img
        src={logo}
        alt="Design Nexus"
        title="Design Nexus"
        className="aspect-square w-14 object-contain text-xs font-light"
      />
      <span className="bg-gradient-to-br from-violet-600 from-0% via-fuchsia-500 via-60% to-fuchsia-400 bg-clip-text uppercase text-transparent">
        NEXUS
      </span>
    </Link>
  );
};
export default Logo;
