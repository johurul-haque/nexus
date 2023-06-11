import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Classes as Skeleton } from '../../components/Skeleton';

const Student = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(true);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('selected-class')));
    setTimeout(() => setLoading(false), 600);
  }, [count]);

  const remove = (item) => {
    const index = JSON.parse(localStorage.getItem('selected-class')).findIndex(
      (object) => {
        return object.name === item.name;
      }
    );
    if (index > -1) {
      data.splice(index, 1);
      localStorage.removeItem('selected-class');
      localStorage.setItem('selected-class', JSON.stringify(data));
      setCount(data);
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : !data || data.length == 0 ? (
        <p className="mt-2 text-center">
          You don&apos;t have any selected class
        </p>
      ) : (
        <div
          className={`my-6 grid grid-cols-[repeat(auto-fit,minmax(10rem,17rem))] gap-6 max-md:justify-center ${
            data.length >= 2 && 'max-lg:justify-center'
          }`}
        >
          <h2 className="col-span-full -mb-2 border-l-8 border-amber-400 pl-4 text-lg font-medium leading-snug">
            Selected Class
          </h2>
          {data?.map((item, idx) => (
            <article className={'flex flex-col border p-4'} key={idx}>
              <div className="relative">
                <img
                  className="aspect-video w-full bg-slate-100 object-cover text-sm"
                  src={item.image}
                  alt={item.name}
                  width={1920}
                  height={1080}
                />
                <p
                  className={`absolute bottom-2 right-2 rounded-full bg-violet-200/90 px-2 py-1  text-center text-xs text-violet-900 `}
                >
                  {item.availableSeats == 1
                    ? '1 seat'
                    : `${item.availableSeats} seats `}
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
              <div className="mt-auto flex w-full gap-2">
                <Link
                  to={`/payment`}
                  className="grid h-9 grow place-items-center bg-amber-300 text-center font-medium uppercase text-amber-800 outline-none ring-amber-300/80 ring-offset-2 transition-all duration-200 hover:bg-amber-400 focus-visible:ring-2"
                >
                  Purchase
                </Link>
                <button
                  onClick={() => remove(item)}
                  className="h-9 bg-rose-200 px-2 text-center uppercase text-rose-700 outline-none ring-rose-500 ring-offset-2 transition-all duration-200 hover:bg-rose-300 focus-visible:ring-1"
                >
                  <span className="sr-only">Remove From Dashboard</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
export default Student;
