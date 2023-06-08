import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to={'/'}
      className="font-fredoka ring-outline flex max-w-fit items-center gap-2 rounded-sm text-lg font-medium sm:text-xl"
    >
      <img
        src="/wheeltopia.jpg"
        alt="Wheeltopia"
        className="aspect-square w-14 object-contain text-xs font-light"
      />
      <span className="bg-gradient-to-br from-green-600 from-0% via-lime-500 via-60% to-lime-400 bg-clip-text text-transparent">
        dNEXUS
      </span>
    </Link>
  );
};
export default Logo;
