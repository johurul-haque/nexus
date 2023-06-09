import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { sofa } from '../assets/images';

const Instructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/instructor.json')
      .then((res) => res.json())
      .then((data) => setData(data.popularInstructors));
  }, []);

  return (
    <>
      <Helmet>
        <title>Nexus - Instructors</title>
      </Helmet>
      <main className="container-padding mb-10 mt-7">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-2xl font-medium text-fuchsia-950 lg:text-3xl lg:font-semibold">
            Instructors
          </h1>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(10rem,13rem))] justify-center gap-x-7 gap-y-7">
            {data.map((item, idx) => (
              <figure key={idx} className="grid w-52 justify-center">
                <div className="relative mb-3">
                  <div className="absolute -bottom-2 -right-2 -z-20 h-full w-full bg-gradient-to-br from-violet-600 to-fuchsia-600 to-90%"></div>
                  <img
                    className="aspect-[4/5] w-52"
                    src={sofa}
                    width={102}
                    height={128}
                    alt={item.name}
                  />
                </div>

                <figcaption className="font-medium">{item.name}</figcaption>
                <dl className="max-w-full overflow-hidden">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex gap-2 break-all text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="aspect-square w-5 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      className="line-clamp-1 transition-all duration-200 hover:bg-gradient-to-r hover:from-violet-600 hover:from-50% hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent"
                      href={`mailto:${item.email}`}
                    >
                      {item.email}
                    </a>
                  </dd>
                </dl>
              </figure>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Instructors;
