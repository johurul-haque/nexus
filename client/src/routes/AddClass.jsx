import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import Animate from '../components/Animate';
import Loading from '../components/Loading';
import { AuthContext } from '../providers/Authenticate';

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { handleSubmit, register, reset } = useForm(),
    [loading, setLoading] = useState(false);

  const imgbb = `https://api.imgbb.com/1/upload?expiration=600&key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;

  const addClass = (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', data.image[0]);

    const fetchImg = async () => {
      const res = await fetch(imgbb, {
          method: 'POST',
          body: formData,
        }),
        imgData = await res.json();

      // eslint-disable-next-line no-unused-vars
      const postToServer = await fetch(
        `${import.meta.env.VITE_SERVER}/classes`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: imgData.data.display_url,
            name: data.name,
            instructor: user.displayName,
            instructorEmail: user.email,
            availableSeats: data.availableSeats,
            price: data.price,
            status: 'pending',
            enrolledStudents: 0,
            feedback: null,
          }),
        }
      );
      // eslint-disable-next-line no-unused-vars
      const addInstructor = await fetch(
        `${import.meta.env.VITE_SERVER}/instructors`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: user.photoURL,
            name: user.displayName,
            email: user.email,
          }),
        }
      );
      toast.success('Successfully created your class');
      reset();
      setLoading(false);
    };
    fetchImg();
  };
  return (
    <>
      <Helmet>
        <title>Create Class - Nexus</title>
      </Helmet>
      <Animate className="container-padding mb-10 mt-7">
        <h1 className="text-center text-2xl font-medium text-fuchsia-950 lg:text-3xl lg:font-semibold">
          Add Your Class
        </h1>
        <form
          onSubmit={handleSubmit(addClass)}
          className="mx-auto my-7 grid max-w-xs grid-cols-2 gap-x-4 gap-y-7 transition-all duration-200"
        >
          <fieldset className="relative col-span-full text-left">
            <input
              type="text"
              id="className"
              {...register('name')}
              className="peer h-10 w-full border-b-2 placeholder-transparent outline-none transition-all duration-200 focus:border-fuchsia-500"
              placeholder="Class Name"
              required
            />
            <label
              htmlFor="className"
              className="absolute -top-3.5 left-0 cursor-text text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Class Name
            </label>
          </fieldset>
          <fieldset className="relative col-span-full text-left">
            <input
              type="text"
              id="instructor"
              {...register('instructor')}
              className="peer h-10 w-full border-b-2 bg-white text-gray-400 placeholder-transparent outline-none transition-all duration-200 focus:border-fuchsia-500"
              placeholder="Instructor Name"
              defaultValue={user.displayName}
              disabled={true}
            />
            <label
              htmlFor="instructor"
              className="absolute -top-3.5 left-0 cursor-text text-sm text-gray-600 transition-all"
            >
              Instructor Name
            </label>
          </fieldset>
          <fieldset className="relative col-span-full text-left">
            <input
              type="email"
              id="instructorEmail"
              {...register('instructorEmail')}
              className="h-10 w-full border-b-2 bg-white text-gray-400 placeholder-transparent outline-none transition-all duration-200 focus:border-fuchsia-500"
              placeholder="Email"
              defaultValue={user.email}
              disabled={true}
            />
            <label
              htmlFor="instructorEmail"
              className="absolute -top-3.5 left-0 cursor-text text-sm text-gray-600 transition-all"
            >
              Email
            </label>
          </fieldset>

          <fieldset className="relative text-left max-[330px]:col-span-full">
            <input
              type="number"
              id="availableSeats"
              {...register('availableSeats')}
              className="peer h-10 w-full border-b-2 placeholder-transparent outline-none transition-all duration-200 focus:border-fuchsia-500"
              placeholder="Available Seats"
              required
            />
            <label
              htmlFor="availableSeats"
              className="absolute -top-3.5 left-0 cursor-text text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Available Seats
            </label>
          </fieldset>
          <fieldset className="relative text-left max-[330px]:col-span-full">
            <input
              type="number"
              id="price"
              {...register('price')}
              className="peer h-10 w-full border-b-2 placeholder-transparent outline-none transition-all duration-200 focus:border-fuchsia-500"
              placeholder="Price"
              required
            />
            <label
              htmlFor="price"
              className="absolute -top-3.5 left-0 cursor-text text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Price
            </label>
          </fieldset>
          <fieldset className="col-span-full -my-2">
            <label
              htmlFor="image"
              className="cursor-text text-sm text-gray-600 transition-all"
            >
              Choose Class Image
            </label>
            <input
              type="file"
              id="image"
              {...register('image')}
              className="ring-outline mt-2 h-10 w-full text-gray-500 transition-all duration-200 file:mr-4 file:rounded-full file:border-0 file:bg-fuchsia-50
            file:px-4 file:py-2
            file:text-sm file:font-semibold
            file:text-fuchsia-700 hover:file:bg-fuchsia-100"
              required
            />
          </fieldset>
          <button className="col-span-full flex h-12 items-center justify-center gap-2 bg-gradient-to-br from-purple-600 to-fuchsia-600 to-60% text-lg font-medium tracking-wide text-white outline-none ring-fuchsia-500 ring-offset-2 focus-visible:ring-2">
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
      </Animate>
    </>
  );
};
export default AddClass;
