import { Link } from 'react-router-dom';

const Instructor = () => {
  return (
    <>
      <p className="mt-1 text-center tracking-wide">
        You haven&apos;t added any classes yet
      </p>
      <Link
        to={'/classes/add'}
        className="ring-outline mx-auto mt-2 block max-w-fit rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1 text-white hover:rounded-full"
      >
        + Add Class
      </Link>
    </>
  );
};
export default Instructor;
