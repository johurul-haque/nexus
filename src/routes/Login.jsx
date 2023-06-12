import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Animate from '../components/Animate';

import google from '../assets/svg/google.svg';
import Loading from '../components/Loading';
import { AuthContext } from '../providers/Authenticate';

const Login = () => {
  const { signIn, setUser, popupLogin } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false),
    [showPass, setShowPass] = useState(true),
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

  const show = () => {
    document.getElementById('password').setAttribute('type', 'text');
    setShowPass(false);
  };

  const hide = () => {
    document.getElementById('password').setAttribute('type', 'password');
    setShowPass(true);
  };

  return (
    <>
      <Helmet>
        <title>Login - Nexus</title>
      </Helmet>

      <Animate className="container-padding my-16 text-center text-gray-800">
        <div className="mx-auto max-w-xs">
          <h1 className="mb-7 text-4xl font-bold">Welcome back</h1>
          <form
            onSubmit={handleSubmit(login)}
            className="grid gap-6 transition-all duration-200"
          >
            <fieldset className="relative text-left">
              <input
                type="email"
                id="email"
                {...register('email')}
                className="peer h-10 w-full border-b-2 placeholder-transparent outline-none transition-all duration-200 focus:border-fuchsia-500"
                placeholder="Email address"
                required
              />
              <label
                htmlFor="email"
                className="absolute -top-3.5 left-0 cursor-text text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Email address
              </label>
            </fieldset>
            {emailError}
            <fieldset className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                {...register('password')}
                className="peer h-10 w-full border-b-2 pr-7 placeholder-transparent outline-none transition-all duration-200 focus:border-fuchsia-500"
                required
              />
              {showPass ? (
                <button
                  onClick={show}
                  type="button"
                  className="absolute bottom-2 right-0"
                  title="Show Password"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={hide}
                  type="button"
                  className="absolute bottom-2 right-0"
                  title="Hide Password"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </button>
              )}
              <label
                htmlFor="password"
                className="absolute -top-3.5 left-0 cursor-text text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Password
              </label>
            </fieldset>
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
        </div>
      </Animate>
    </>
  );
};
export default Login;
