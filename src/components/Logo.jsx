import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to={'/'}
      className="font-fredoka flex max-w-fit items-center gap-2 text-xl font-medium sm:text-2xl"
    >
      <img
        src="/wheeltopia.jpg"
        alt="Wheeltopia"
        className="aspect-square w-14 object-contain text-xs font-light mix-blend-multiply sm:w-16"
      />
      <span className="bg-gradient-to-br from-green-600 from-0% via-lime-500 via-60% to-lime-400 bg-clip-text text-transparent">
        Wheeltopia
      </span>
    </Link>
  );
};
export default Logo;
