import { updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import google from '../assets/svg/google.svg';
import Loading from '../components/Loading';
import { AuthContext } from '../providers/Authenticate';

const Register = () => {
  const { createUser, auth, popupLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      setLoading(true);
      createUser(data.email, data.password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: data.user,
            photoURL: data.profile,
          });
          setLoading(false);
          reset();
        })
        .catch((error) => console.error(error.message));
    } else {
      setError(
        <p className="text-left text-sm">
          {' '}
          <span className="text-rose-500">❗</span> Password doesn&apos;t match
        </p>
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Nexus - Register</title>
      </Helmet>

      <main className="mx-auto my-16 max-w-xs text-center text-gray-800">
        <h1 className="text-4xl font-bold">Register</h1>
        <p className="mb-5 mt-2">
          Greetings! We kindly request you to enter your details
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <input
            type="text"
            {...register('user')}
            className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
            placeholder="Name"
            required
          />
          <input
            type="email"
            {...register('email')}
            className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
            placeholder="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
                message:
                  'Password must contain at least one capital letter, one special character, and be at least 6 characters long',
              },
            })}
            className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
            required
          />
          {errors.password?.type === 'pattern' && (
            <p className="text-left text-sm">
              <span className="text-rose-500">⚠️</span>{' '}
              {errors.password?.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword')}
            className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
            required
          />
          {error}
          <input
            type="text"
            {...register('profile')}
            className="h-12 rounded border px-4 outline-none transition-all duration-200 focus:border-fuchsia-500"
            placeholder="Photo URL"
            required
          />
          <button className="flex h-12 items-center justify-center gap-2 rounded bg-gradient-to-r from-violet-600 to-fuchsia-600 text-lg font-semibold text-white outline-none ring-fuchsia-500 ring-offset-2 focus-visible:ring-2">
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
export default Register;
