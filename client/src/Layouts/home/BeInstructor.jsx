const BeInstructor = () => {
  return (
    <section className="mx-auto grid max-w-fit items-center gap-x-20 gap-y-8 py-7 sm:py-12 md:grid-cols-2 lg:py-16">
      <img
        src="/images/beInstructor.jpg"
        alt="A person standing up trying to explain something"
      />
      <div className="max-md:text-center">
        <h2 className="text-xl font-semibold lg:text-2xl">
          Become an Instructor
        </h2>
        <p className="mt-2 max-w-sm max-md:mx-auto">
          Instructors from around the world can teach millions of students on
          Design Nexus. We provide the tools and skills to teach what you love.
        </p>
        <a
          href="mailto:johurulhaquej11@gmail.com"
          className="mt-3 inline-block bg-gray-950 px-4 py-2 font-mono text-white transition-opacity hover:opacity-95"
        >
          request for instructor role
        </a>
      </div>
    </section>
  );
};
export default BeInstructor;
