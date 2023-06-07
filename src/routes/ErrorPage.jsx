import { Link } from 'react-router-dom';
import notFound from '../assets/svg/404.svg';

const ErrorPage = () => {
  return (
    <main className="container-padding mx-auto grid max-w-2xl flex-1 place-items-center">
      <img src={notFound} alt="404 vector" />
      <Link
        to={'/'}
        className="flex max-w-fit items-center gap-2 rounded-full border border-fuchsia-300 px-4 py-2 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-violet-600
        hover:to-fuchsia-600 hover:to-60% hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back to Home
      </Link>
    </main>
  );
};
export default ErrorPage;
