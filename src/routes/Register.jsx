import { Link } from 'react-router-dom';
import google from '../assets/svg/google.svg';

const Register = () => {
  return (
    <section className="mx-auto my-16 max-w-xs text-center text-gray-800">
      <h1 className="text-4xl font-bold">Register</h1>
      <p className="mb-5 mt-2">
        Greetings! We kindly request you to enter your details
      </p>
      <form className="grid gap-3 transition-all duration-200">
        <input
          type="text"
          name="user"
          className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirm-password"
          className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
        />
        <input
          type="text"
          name="profile"
          className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
          placeholder="Photo URL"
        />
        <button className="h-12 rounded bg-gradient-to-r from-violet-600 to-fuchsia-600 text-lg font-semibold text-white outline-none ring-fuchsia-500 ring-offset-2 focus-visible:ring-2">
          Continue
        </button>
      </form>
      <p className="my-3">
        Already have an account?{' '}
        <Link
          to={'/signin'}
          className="bg-gradient-to-r from-violet-600 from-50% to-fuchsia-500 bg-clip-text font-medium text-transparent outline-none ring-fuchsia-500 ring-offset-2 focus-visible:ring-1"
        >
          Sign in
        </Link>
      </p>
      <div className="mb-4 flex items-center gap-5 text-sm text-gray-500">
        <hr className="basis-1/2 rounded-full" />
        OR
        <hr className="basis-1/2 rounded-full" />
      </div>
      <button className="flex h-12 w-full items-center gap-3 rounded border px-4 text-base font-medium text-gray-600 outline-none ring-fuchsia-500 ring-offset-2 transition-all duration-200 hover:bg-gray-200 focus-visible:ring-2">
        <img
          src={google}
          alt="Google"
          width={20}
          height={20}
          className="aspect-square w-5 rounded-full object-contain"
        />
        Continue with Google
      </button>
    </section>
  );
};
export default Register;
