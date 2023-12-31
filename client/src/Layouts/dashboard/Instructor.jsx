import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/Authenticate';

const Instructor = () => {
  const { user } = useContext(AuthContext);
  const { data: addedClass = [] } = useQuery({
    queryKey: ['class', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER}/instructor/class?email=${user.email}`
      );
      return res.json();
    },
  });
  return (
    <>
      {addedClass.length < 1 && (
        <p className="mt-1 text-center tracking-wide">
          You haven&apos;t added any classes yet
        </p>
      )}

      <Link
        to={'/dashboard/manage/class'}
        className="ring-outline mx-auto mt-3 block max-w-fit rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1 text-white hover:rounded-full"
      >
        + Add Your Class
      </Link>
      {addedClass.length > 0 && (
        <section>
          <h2 className="mt-3 border-l-8 border-violet-600 pl-4 text-lg font-medium leading-snug">
            My Classes
          </h2>
          <div
            className={`my-6 grid grid-cols-[repeat(auto-fit,minmax(10rem,17rem))] gap-6 max-md:justify-center ${
              addedClass.length >= 3 && 'max-lg:justify-center'
            }`}
          >
            {addedClass.map((item) => (
              <article className={`flex flex-col border p-3`} key={item._id}>
                <div className="relative">
                  <img
                    className="aspect-video w-full bg-slate-100 object-cover text-sm"
                    src={item.image}
                    alt={item.name}
                    width={1920}
                    height={1080}
                  />
                  <p
                    className={`absolute bottom-2 right-2 rounded-full text-center ${
                      item.availableSeats
                        ? 'bg-violet-200/90 text-violet-900'
                        : 'animate-bounce bg-rose-600/90 text-white'
                    }  px-2 py-1 text-xs `}
                  >
                    {item.availableSeats
                      ? item.availableSeats == 1
                        ? '1 seat'
                        : `${item.availableSeats} seats `
                      : 'No seat'}{' '}
                    available
                  </p>
                </div>
                <h3 className="mt-2 text-lg font-medium leading-snug">
                  {item.name}
                </h3>

                <dl className="grid grid-cols-[2fr,1fr] text-sm">
                  <dt className="sr-only">Instructor</dt>
                  <dd className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="aspect-square w-4 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    {item.instructor}
                  </dd>
                  <dt className="sr-only">Price</dt>
                  <dd className="text-right text-lg font-medium text-slate-800">
                    $ {item?.price.toString().split('.')[0]}{' '}
                    <span className="text-xs font-normal">
                      {item?.price.toString().split('.')[1]}
                    </span>
                  </dd>
                  <div className="col-span-full mt-1"></div>
                  <dt className="sr-only">Status</dt>
                  <dd className="flex items-center gap-2 text-xs capitalize text-slate-700">
                    <span className="relative flex h-3 w-3">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                          item.status == 'pending'
                            ? 'bg-amber-400'
                            : item.status == 'approved'
                            ? 'bg-emerald-400'
                            : 'bg-rose-400'
                        }  opacity-75`}
                      ></span>
                      <span
                        className={`relative inline-flex h-3 w-3 rounded-full ${
                          item.status == 'pending'
                            ? 'bg-amber-500'
                            : item.status == 'approved'
                            ? 'bg-emerald-500'
                            : 'bg-rose-500'
                        }`}
                      ></span>
                    </span>
                    {item.status}
                  </dd>

                  <dt className="sr-only">Enrolled Students</dt>
                  <dd className="flex items-center gap-1 justify-self-end text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                    {item.enrolledStudents}
                  </dd>
                </dl>
                {item.feedback && (
                  <section className="mt-2 text-sm tracking-wide text-gray-600">
                    <h4 className="flex items-center gap-2 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                      Feedback
                    </h4>
                    <p className="pl-6 italic leading-relaxed">
                      &ldquo;{item.feedback}&rdquo;
                    </p>
                  </section>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Instructor;
