import { sofa } from '../../assets/images';

const About = () => {
  return (
    <section className="grid gap-7 pb-10 selection:bg-violet-200 selection:text-violet-900 dark:text-slate-400 lg:grid-cols-2">
      <h2 className="-order-1 col-span-full text-xl font-semibold max-lg:text-center lg:text-2xl">
        About Us
      </h2>
      <div className="mx-auto max-w-[65ch] space-y-3 text-justify leading-relaxed tracking-wide max-lg:text-lg md:tracking-wider">
        <p>
          {' '}
          Introducing Design Nexus, a premier destination for creative
          individuals seeking to enhance their design skills and unlock their
          full potential. Our platform offers a diverse range of classes taught
          by experienced instructors, empowering students to explore various
          design disciplines and stay ahead in the ever-evolving world of
          design.
        </p>

        <p>
          {' '}
          At Design Nexus, we believe in the essence of design as a
          transformative force, capable of shaping the way we perceive and
          interact with the world. Whether you&apos;re a seasoned professional
          or just starting your design journey, our carefully curated selection
          of classes caters to all skill levels and interests.
        </p>

        <p>
          Discover the top classes handpicked by our experts, featuring
          cutting-edge topics such as Advanced UI/UX Design, Motion Graphics
          Masterclass, Web Development Bootcamp, and more. Immerse yourself in
          captivating lessons that combine theoretical knowledge with practical
          applications, enabling you to create impactful designs and leave a
          lasting impression.
        </p>

        <p>
          Our esteemed instructors, including renowned industry leaders like
          Michael Thompson, David Reynolds, Daniel Reed, and William Turner,
          bring their wealth of experience and expertise to guide you through
          each class. Benefit from their insights, personalized feedback, and
          industry best practices as you embark on your creative journey.
        </p>

        <p>
          Enroll today and unleash the true potential of{' '}
          <span className="bg-gradient-to-r from-violet-600 from-50% to-fuchsia-500 bg-clip-text text-transparent">
            your design journey.
          </span>
        </p>
      </div>
      <img
        src={sofa}
        role="presentation"
        className="mx-auto aspect-[4/5] w-full rounded-t-full object-cover object-left max-lg:-order-1 max-lg:max-w-[65ch]"
        width={864}
        height={1080}
      />
    </section>
  );
};
export default About;
