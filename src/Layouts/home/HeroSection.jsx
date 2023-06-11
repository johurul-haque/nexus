import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { design, sketch, sofa } from '../../assets/images';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
  return (
    <section className="max-sm:-mx-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <figure className="absolute left-1/2 top-8 -translate-x-1/2 italic min-[370px]:top-20 sm:top-1/4">
            <blockquote className="w-full max-w-sm leading-tight tracking-wider text-amber-950 max-[450px]:w-[14rem] max-[450px]:text-base max-[315px]:hidden sm:text-xl lg:max-w-md lg:text-2xl lg:font-medium">
              <p>
                Design is the intermediary between information and
                understanding.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-yellow-900/90">
              - Hans Hofmann
            </figcaption>
          </figure>
          <img
            src={sofa}
            role="presentation"
            width={1920}
            height={1080}
            className="aspect-video object-cover"
          />
          <h2 className="mb-10 mt-3 text-xl font-bold text-fuchsia-950 max-sm:px-4 sm:mb-11 sm:mt-7 sm:text-3xl">
            Master the Art of Design with Expert Instructors.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="absolute left-1/2 top-[30%] z-40 -translate-x-1/2 italic">
            <blockquote className="w-full max-w-sm leading-tight tracking-wider text-amber-950 max-[450px]:w-[14rem] max-[450px]:text-base max-[315px]:hidden sm:text-xl lg:max-w-md lg:text-2xl lg:font-medium">
              <p>Design adds value faster than it adds costs.</p>
            </blockquote>
            <figcaption className="mt-2 text-yellow-900/90">
              - Joel Spolsky
            </figcaption>
          </figure>
          <img
            src={sketch}
            role="presentation"
            width={1920}
            height={1080}
            className="aspect-video object-cover blur-sm"
          />
          <h2 className="mb-10 mt-3 text-xl font-bold text-fuchsia-950 max-sm:px-4 sm:mb-11 sm:mt-7 sm:text-3xl">
            Discover a World of Creative Possibilities.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <figure className="absolute left-1/2 top-1/4 z-40 -translate-x-1/2 italic">
            <blockquote className="w-full max-w-sm leading-tight tracking-wider text-amber-950 max-[450px]:w-[14rem] max-[450px]:text-base max-[315px]:hidden sm:text-xl lg:max-w-md lg:text-2xl lg:font-medium">
              <p>
                Design is not just what it looks and feels like. Design is how
                it works...
              </p>
            </blockquote>
            <figcaption className="mt-2 text-yellow-900/90">
              - Steve Jobs
            </figcaption>
          </figure>
          <img
            src={design}
            role="presentation"
            width={1920}
            height={1080}
            className="aspect-video object-cover blur-sm"
          />
          <h2 className="mb-10 mt-3 text-xl font-bold text-fuchsia-950 max-sm:px-4 sm:mb-11 sm:mt-7 sm:text-3xl">
            Elevate Your Design Skills to New Heights.
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
