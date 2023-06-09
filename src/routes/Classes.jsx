import { useEffect, useState } from 'react';
import { sofa } from '../assets/images';
import Animate from '../components/Animate';
import { Classes as Skeleton } from '../components/Skeleton';

const Classes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/classes.json');
      const data = await res.json();
      setData(data.classes);
      setTimeout(() => setLoading(false), 1000);
    };
    fetchData();
  }, []);
  return (
    <Animate className="container-padding mx-auto mb-10 mt-7 max-w-7xl">
      <h1 className="text-center text-2xl font-medium text-fuchsia-950 lg:text-3xl lg:font-semibold">
        Classes
      </h1>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="my-6 grid grid-cols-[repeat(auto-fit,minmax(10rem,17rem))] justify-center gap-6">
          {data.map((item, idx) => (
            <article
              className={`flex flex-col p-4 ${
                item.availableSeats ? 'border' : 'bg-rose-300 text-rose-950'
              }`}
              key={idx}
            >
              <div className="relative">
                <img
                  className="aspect-video w-full bg-slate-100 object-cover text-sm"
                  src={sofa}
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
              <h2 className="mt-3 text-lg font-medium leading-snug">
                {item.name}
              </h2>

              <dl className="mb-3 flex items-center justify-between text-sm">
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
                <dd className="text-lg font-medium">
                  $ {item?.price.toString().split('.')[0]}{' '}
                  <span className="text-xs font-normal">
                    {item?.price.toString().split('.')[1]}
                  </span>
                </dd>
              </dl>
              {item.availableSeats ? (
                <button className="mt-auto h-9 w-full self-baseline bg-violet-600 text-center font-medium uppercase text-white outline-none ring-fuchsia-500 ring-offset-2 transition-all duration-200 focus-visible:ring-2">
                  Select
                </button>
              ) : (
                <button
                  disabled="true"
                  className="mt-auto h-9 w-full self-baseline bg-slate-300 text-center font-medium uppercase text-slate-700"
                >
                  Select
                </button>
              )}
            </article>
          ))}
        </div>
      )}
    </Animate>
  );
};
export default Classes;
