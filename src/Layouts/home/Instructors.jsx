import { useEffect, useState } from 'react';

const Instructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/instructors?limit=6`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="my-10 dark:text-slate-400">
      <h2 className="text-center text-xl font-semibold lg:text-2xl">
        Top Instructors
      </h2>
      <div className="mt-5 flex flex-wrap justify-center gap-10">
        {data.map((item, idx) => (
          <figure key={idx} className="grid justify-center text-center">
            <img
              className="mb-3 aspect-square w-52 rounded-full bg-slate-200 object-cover object-top text-sm drop-shadow-2xl"
              src={item.image}
              width={128}
              height={128}
              alt={item.name}
            />
            <figcaption className="font-medium">{item.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
export default Instructors;
