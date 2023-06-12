import { Dialog, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import ManageClassStatus from '../components/ManageClassStatus';

const ManageClasses = () => {
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ['setClassStatus'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/classes`);
      return res.json();
    },
  });

  const approve = (id, e) => {
    console.log(e.currentTarget.innerText);
    e.currentTarget.setAttribute('disabled', 'true');
    e.currentTarget.nextElementSibling.setAttribute('disabled', 'true');
    e.currentTarget.classList.remove('hover:bg-emerald-100');
    e.currentTarget.nextElementSibling.classList.remove('hover:bg-rose-100');

    const approveClass = async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/classes`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: `${e.currentTarget.innerText.toLowerCase()}d`,
          id,
        }),
      });
      if (res) {
        refetch();
      }
    };
    approveClass();
  };

  const decline = (id, e) => {
    e.currentTarget.setAttribute('disabled', 'true');
    e.currentTarget.previousElementSibling.setAttribute('disabled', 'true');
    e.currentTarget.classList.remove('hover:bg-rose-100');
    e.currentTarget.previousElementSibling.classList.remove(
      'hover:bg-emerald-100'
    );

    const declineClass = async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/classes`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: `${e.currentTarget.innerText.toLowerCase()}d`,
          id,
        }),
      });
      if (res) {
        refetch();
      }
    };
    declineClass();
  };

  let [isOpen, setIsOpen] = useState(false);
  const [objectId, setObjectId] = useState('');
  const { handleSubmit, register, reset } = useForm();

  function closeModal() {
    setIsOpen(false);
  }

  const setId = (event, id) => {
    setObjectId(id);
    setIsOpen(true);
  };

  const sendFeedback = (data) => {
    const res = fetch(`${import.meta.env.VITE_SERVER}/feedback`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedback: data.feedback,
        id: objectId,
      }),
    });

    if (res) {
      reset();
    }
  };

  return (
    <>
      <section className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(8rem,18rem))] justify-center gap-5">
        <h2 className="col-span-full mt-3 border-l-8 border-amber-500 pl-4 text-lg font-medium leading-snug">
          Pending
        </h2>
        {allClasses?.map(
          (item) =>
            item.status === 'pending' && (
              <ManageClassStatus
                key={item._id}
                item={item}
                decline={decline}
                approve={approve}
                feedback={setId}
              />
            )
        )}
      </section>

      <section className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(8rem,18rem))] justify-center gap-5">
        <h2 className="col-span-full mt-3 border-l-8 border-rose-500 pl-4 text-lg font-medium leading-snug">
          Declined
        </h2>
        {allClasses?.map(
          (item) =>
            item.status === 'declined' && (
              <ManageClassStatus
                key={item._id}
                item={item}
                decline={decline}
                approve={approve}
                feedback={setId}
              />
            )
        )}
      </section>

      <section className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(8rem,18rem))] justify-center gap-5">
        <h2 className="col-span-full mt-3 border-l-8 border-emerald-500 pl-4 text-lg font-medium leading-snug">
          Approved
        </h2>
        {allClasses?.map(
          (item) =>
            item.status === 'approved' && (
              <ManageClassStatus
                key={item._id}
                item={item}
                decline={decline}
                approve={approve}
                feedback={setId}
              />
            )
        )}
      </section>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Give Feedback
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      A constructive criticism will undoubtedly give the
                      instructor a room to improve.
                    </p>
                  </div>

                  <form className="mt-5" onSubmit={handleSubmit(sendFeedback)}>
                    <textarea
                      {...register('feedback')}
                      className="h-24 w-full resize-none border-2 p-3 outline-none transition-all duration-200 focus:border-violet-500"
                      required
                    ></textarea>

                    <div className="mt-2 space-x-3">
                      <button
                        type="submit"
                        className="inline-flex justify-center border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 transition-all duration-200 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
                        onClick={() => closeModal()}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 transition-all duration-200 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ManageClasses;
