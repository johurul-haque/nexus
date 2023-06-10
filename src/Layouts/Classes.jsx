import { useEffect, useState } from 'react';

const Classes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/classes?limit=6`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="my-7">
      <h2 className="text-center text-xl font-semibold lg:text-2xl">
        Popular Classes
      </h2>
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(8rem,18rem))] justify-center gap-5">
        {data.map((item, index) => (
          <article key={index} className="max-w-[18rem]">
            <div className="relative bg-black">
              <h3 className="absolute bottom-3 z-40 px-3 text-base font-medium leading-tight tracking-wide text-white">
                {item.name}
              </h3>
              <img
                className="relative aspect-video object-cover [mask-image:linear-gradient(#000_65%,transparent)]"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="mt-2 flex justify-between">
              <p>{item.instructor}</p>
              <dl>
                <dt className="sr-only">Enrolled Students</dt>
                <dd className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Classes;
