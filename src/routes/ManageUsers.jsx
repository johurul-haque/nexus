import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

const ManageUsers = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getUsers'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/users`);
      return res.json();
    },
  });

  const changeRole = (e, email) => {
    const updateRole = async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/users`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: e.currentTarget.innerText.toLowerCase(),
          email: email,
        }),
      });
      if (res) {
        refetch();
      }
    };
    updateRole();
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 2.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <section>
      <h2 className="mt-3 border-l-8 border-violet-600 pl-4 text-lg font-medium leading-snug">
        All Users
      </h2>
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] justify-center gap-5">
        {!isLoading &&
          data.map((item) => (
            <figure
              className="flex items-center gap-5 border p-4"
              key={item._id}
            >
              <img
                className="row-span-full aspect-square w-16 rounded-full object-cover"
                src={item.photo}
                alt={item.name}
              />
              <div className="grow">
                <figcaption>{item.name}</figcaption>
                <dl className="max-w-full overflow-hidden">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex gap-1 break-all text-slate-600">
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      className="line-clamp-1 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-violet-600 hover:from-50% hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent"
                      href={`mailto:${item.email}`}
                    >
                      {item.email}
                    </a>
                  </dd>
                  <div className="mb-2 flex items-center justify-between">
                    <dt className="sr-only">User Role</dt>
                    <dd
                      className={`mt-2 flex max-w-fit items-center gap-1 rounded-full ${
                        item.role == 'admin'
                          ? 'bg-amber-100/80 text-amber-900'
                          : item.role == 'instructor'
                          ? 'bg-emerald-100/80 text-emerald-900'
                          : 'bg-slate-100/80 text-gray-700'
                      } px-2 pr-3 text-sm capitalize`}
                    >
                      <svg
                        width="12"
                        height="12"
                        aria-hidden="true"
                        fill="currentColor"
                        className={`${
                          item.role == 'admin'
                            ? 'text-amber-400'
                            : item.role == 'instructor'
                            ? 'text-emerald-400'
                            : 'text-gray-400'
                        }`}
                      >
                        <circle cx="5" cy="6" r="5" />
                      </svg>
                      {item.role}
                    </dd>
                    <dt className="flex justify-end gap-2 bg-gradient-to-r from-violet-600 from-50% to-fuchsia-500 bg-clip-text text-sm text-transparent">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 text-violet-500"
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
                          variants={draw}
                          custom={1}
                        />
                      </motion.svg>
                      Change Role
                    </dt>
                  </div>
                  <dd className="grid grid-flow-col place-items-center divide-x-2 text-center">
                    {item.role == 'admin' ? (
                      <button
                        className="w-full py-1 text-sm text-gray-400"
                        disabled={true}
                      >
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={(e) => changeRole(e, item.email)}
                        className="w-full py-1 text-sm transition-all duration-200 hover:bg-amber-100 hover:text-amber-900"
                      >
                        Admin
                      </button>
                    )}
                    {item.role == 'instructor' ? (
                      <button
                        className="w-full py-1 text-sm text-gray-400"
                        disabled={true}
                      >
                        Instructor
                      </button>
                    ) : (
                      <button
                        onClick={(e) => changeRole(e, item.email)}
                        className="w-full py-1 text-sm transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-950"
                      >
                        Instructor
                      </button>
                    )}

                    {item.role == 'student' ? (
                      <button
                        className="w-full py-1 text-sm text-gray-400"
                        disabled={true}
                      >
                        Student
                      </button>
                    ) : (
                      <button
                        onClick={(e) => changeRole(e, item.email)}
                        className="w-full py-1 text-sm transition-all duration-200 hover:bg-slate-100 hover:text-slate-800"
                      >
                        Student
                      </button>
                    )}
                  </dd>
                </dl>
              </div>
            </figure>
          ))}
      </div>
    </section>
  );
};
export default ManageUsers;
