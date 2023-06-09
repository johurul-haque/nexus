import { useEffect, useState } from 'react';
import { sofa } from '../assets/images';

const Instructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/instructor.json')
      .then((res) => res.json())
      .then((data) => setData(data.popularInstructors));
  }, []);
  return (
    <section className="my-10">
      <h2 className="text-center text-xl font-semibold lg:text-2xl">
        Top Instructors
      </h2>
      <div className="mt-5 flex flex-wrap justify-center gap-10">
        {data.map((item, idx) => (
          <figure key={idx} className="grid justify-center text-center">
            <img
              className="mb-3 aspect-square w-52 rounded-full text-sm drop-shadow-2xl"
              src={sofa}
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
