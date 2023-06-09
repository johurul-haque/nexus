const Skeleton = () => {
  return (
    <div className="mb-10 mt-7 grid grid-cols-[repeat(auto-fit,minmax(10rem,13rem))] justify-center gap-x-7 gap-y-7">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
        <figure key={id} className="grid w-52 justify-center">
          <div className="mb-3 aspect-[4/5] w-52 animate-pulse bg-slate-200"></div>

          <figcaption className="mb-2 h-5 animate-pulse bg-slate-200"></figcaption>
          <dl>
            <dt className="sr-only">Email</dt>
            <dd className="flex gap-2 text-slate-600">
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
              <div className="grow animate-pulse rounded-sm bg-slate-200"></div>
            </dd>
          </dl>
        </figure>
      ))}
    </div>
  );
};
export default Skeleton;
