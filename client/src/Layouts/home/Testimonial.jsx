import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pattern from '../../assets/svg/pattern.svg';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section
      className="bg-slate-50 py-14 shadow-[0_0_0_100vmax_rgb(248_250_252)] [clip-path:inset(0_-100vmax)] sm:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper testimonial max-w-3xl"
      >
        <SwiperSlide>
          <article className="mx-auto grid max-w-2xl gap-x-6 gap-y-8 border bg-white p-8 sm:grid-cols-[2fr,1fr]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 64 58"
                className="h-5 w-5 text-gray-950"
              >
                <path
                  d="m63.1543 42.42c0-8.1447-5.7507-14.4228-14.7149-14.0835.8456-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6914-2.54521c-12.347 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.4124 16.4589 14.2076 16.4589 8.7951 0 14.5458-6.7872 14.5458-14.5924zm-34.4009 0c0-8.1447-5.7507-14.4228-14.715-14.0835.8457-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6913-2.54521c-12.3471 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.41239 16.4589 14.2075 16.4589 8.7952 0 14.5459-6.7872 14.5459-14.5924z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote className="mt-4 tracking-wide">
                <p>
                  To stay at the leading edge of IT innovation, your team needs
                  to regularly reinvent its skillset. With Design Nexus
                  Business, I can give my team the space to learn and take the
                  initiative. It means we can{' '}
                  <strong>produce higher quality work more quickly.</strong>
                </p>
              </blockquote>
            </div>
            <figure>
              <img
                src={'/images/instructor-9.webp'}
                width={1920}
                height={1080}
                className="mx-auto h-32 w-32 rounded-full object-cover object-top"
              />
              <figcaption className="text-center">
                <h3 className="mt-4 text-lg font-medium leading-snug">
                  Ismaeel Ameen
                </h3>
                <p className="text-gray-700">Head of Data Engineering</p>
                <div className="mt-2">
                  <span className="sr-only">Company</span> Robert Walters
                </div>
              </figcaption>
            </figure>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="mx-auto grid max-w-2xl gap-x-6 gap-y-8 border bg-white p-8 sm:grid-cols-[2fr,1fr]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 64 58"
                className="h-5 w-5 text-gray-950"
              >
                <path
                  d="m63.1543 42.42c0-8.1447-5.7507-14.4228-14.7149-14.0835.8456-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6914-2.54521c-12.347 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.4124 16.4589 14.2076 16.4589 8.7951 0 14.5458-6.7872 14.5458-14.5924zm-34.4009 0c0-8.1447-5.7507-14.4228-14.715-14.0835.8457-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6913-2.54521c-12.3471 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.41239 16.4589 14.2075 16.4589 8.7952 0 14.5459-6.7872 14.5459-14.5924z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote className="mt-4 tracking-wide">
                <p>
                  Design Nexus has been a great platform to stay competitive in
                  the digital transformation of the workplace by offering{' '}
                  <strong>
                    fresh, relevant, personalized on-demand learning content
                  </strong>{' '}
                  powered by a dynamic content marketplace.
                </p>
              </blockquote>
            </div>
            <figure>
              <img
                src={'/images/instructor-2.webp'}
                width={1920}
                height={1080}
                className="mx-auto h-32 w-32 rounded-full object-cover object-center"
              />
              <figcaption className="text-center">
                <h3 className="mt-4 text-lg font-medium leading-snug">
                  John Doe
                </h3>
                <p className="text-gray-700">The Tech Lead</p>
                <div className="mt-2">
                  <span className="sr-only">Company</span> Wellfound
                </div>
              </figcaption>
            </figure>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonial;
