import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import google from '../assets/svg/google.svg';
import Loading from '../components/Loading';
import { AuthContext } from '../providers/Authenticate';

const Login = () => {
  const { signIn, setUser, popupLogin } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false),
    [error, setError] = useState(null),
    [emailError, setEmailError] = useState(null);

  const login = (data) => {
    setLoading(true);
    signIn(data.email, data.password)
      .then((userCredential) => {
        setUser(userCredential.user);
        reset();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.includes('user-not-found')) {
          setEmailError(
            <p className="-mt-2 text-left text-sm">
              <span className="text-red-400">*</span> {error.message}
            </p>
          );
          setError(null);
        } else {
          setError(
            <p className="-mt-2 text-left text-sm">
              <span className="text-red-400">*</span> {error.message}
            </p>
          );
          setEmailError(null);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Nexus - Login</title>
      </Helmet>

      <main className="mx-auto my-16 max-w-xs text-center text-gray-800">
        <h1 className="mb-7 text-4xl font-bold">Welcome back</h1>
        <form
          onSubmit={handleSubmit(login)}
          className="grid gap-3 transition-all duration-200"
        >
          <input
            type="email"
            {...register('email')}
            className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
            placeholder="Email address"
            required
          />
          {emailError}
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
            required
          />
          {error}
          <button className="flex h-12 items-center justify-center gap-2 rounded bg-gradient-to-br from-violet-600 to-fuchsia-600 text-lg font-semibold text-white outline-none ring-fuchsia-500 ring-offset-2 focus-visible:ring-2">
            {loading && (
              <Loading
                width={'w-5'}
                fill="fill-fuchsia-600"
                text="text-white"
              />
            )}
            Continue
          </button>
        </form>
        <p className="my-3">
          Don&apos;t have an account?{' '}
          <Link
            to={'/signup'}
            className="bg-gradient-to-r from-violet-600 from-50% to-fuchsia-500 bg-clip-text font-medium text-transparent outline-none ring-fuchsia-500 ring-offset-2 focus-visible:ring-1"
          >
            Sign up
          </Link>
        </p>
        <div className="mb-4 flex items-center gap-5 text-sm text-gray-500">
          <hr className="basis-1/2 rounded-full" />
          OR
          <hr className="basis-1/2 rounded-full" />
        </div>
        <button
          onClick={popupLogin}
          className="flex h-12 w-full items-center gap-3 rounded border px-4 text-base font-medium text-gray-600 outline-none ring-fuchsia-500 ring-offset-2 transition-all duration-200 hover:bg-gray-200 focus-visible:ring-2"
        >
          <img
            src={google}
            alt="Google"
            width={20}
            height={20}
            className="aspect-square w-5 rounded-full object-contain"
          />
          Continue with Google
        </button>
      </main>
    </>
  );
};
export default Login;
