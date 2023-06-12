/* eslint-disable react/prop-types */
const ManageClassStatus = ({ item, decline, approve, feedback }) => {
  return (
    <>
      <article className="flex flex-col border p-3" key={item._id}>
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
        <dl className="mt-2">
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
        </dl>
        <h3 className="mt-1 text-lg font-medium leading-snug">{item.name}</h3>

        <dl className="grid grid-cols-[2fr,1fr] text-sm">
          <dt className="sr-only">Instructor</dt>
          <dd className="-order-1 flex items-center gap-1">
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
          <dt className="sr-only">Instructor Email</dt>
          <dd className="col-span-full flex items-center gap-1 text-xs text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 text-gray-700"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <a
              className="hover:underline"
              href={`mailto:${item.instructorEmail}`}
            >
              {item.instructorEmail}
            </a>
          </dd>
          <dt className="sr-only">Price</dt>
          <dd className="-order-1 text-right text-lg font-medium text-slate-800">
            $ {item?.price.toString().split('.')[0]}{' '}
            <span className="text-xs font-normal">
              {item?.price.toString().split('.')[1]}
            </span>
          </dd>
          <div className="col-span-full mt-1"></div>
        </dl>
        <div className="mt-2 grid grid-cols-2 place-items-center gap-y-1">
          {item.status == 'pending' ? (
            <>
              <button
                onClick={(e) => approve(item._id, e)}
                className="flex w-full items-center justify-center gap-2 border-r-2 py-1 text-sm transition-all duration-200 hover:bg-emerald-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 shrink-0 text-emerald-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Approve
              </button>
              <button
                onClick={(e) => decline(item._id, e)}
                className="flex w-full items-center justify-center gap-2 py-1 text-sm transition-all duration-200 hover:bg-rose-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 shrink-0 text-rose-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Decline
              </button>
            </>
          ) : (
            <>
              <button
                className="flex w-full items-center justify-center gap-2 border-r-2 py-1 text-sm transition-all duration-200"
                disabled={true}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 shrink-0 ${
                    item.status === 'approved'
                      ? 'text-emerald-500'
                      : 'text-slate-500'
                  } `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item.status === 'approved' ? 'Approved' : 'Approve'}
              </button>
              <button
                disabled={true}
                className="flex w-full items-center justify-center gap-2 py-1 text-sm transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 shrink-0 ${
                    item.status === 'declined'
                      ? 'text-rose-500'
                      : 'text-slate-500'
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {item.status === 'declined' ? 'Declined' : 'Decline'}
              </button>
            </>
          )}

          <button
            onClick={(e) => feedback(e, item._id)}
            className="col-span-full mt-1 flex w-full items-center justify-center gap-2 bg-slate-100 py-2 text-sm transition-all duration-200 hover:bg-slate-200/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 shrink-0 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            {item.feedback ? 'Feedback sent' : 'Send Feedback'}
          </button>
        </div>
      </article>
    </>
  );
};
export default ManageClassStatus;
