import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { room, sofa, wall } from '../../assets/images';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-7xl max-sm:-mx-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
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
        </SwiperSlide>
        <SwiperSlide>
          <figure className="absolute right-[4%] top-[40%] z-40 -translate-y-1/2 italic">
            <blockquote className="w-full max-w-sm leading-tight tracking-wider text-emerald-950 max-[450px]:w-[14rem] max-[450px]:text-base max-[315px]:hidden sm:text-xl lg:max-w-md lg:text-2xl lg:font-medium">
              <p>Design adds value faster than it adds costs.</p>
            </blockquote>
            <figcaption className="mt-2 text-green-900/90">
              - Joel Spolsky
            </figcaption>
          </figure>
          <img
            src={wall}
            role="presentation"
            width={1920}
            height={1080}
            className="aspect-video object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <figure className="absolute right-[4%] top-1/4 z-40 italic">
            <blockquote className="w-full max-w-sm leading-tight tracking-wider text-slate-950 max-[450px]:w-[14rem] max-[450px]:text-base max-[315px]:hidden sm:text-xl lg:max-w-md lg:text-2xl lg:font-medium">
              <p>
                Design is not just what it looks and feels like. Design is how
                it works...
              </p>
            </blockquote>
            <figcaption className="mt-2 text-gray-900/90">
              - Steve Jobs
            </figcaption>
          </figure>
          <img
            src={room}
            role="presentation"
            width={1920}
            height={1080}
            className="aspect-video object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="mt-5 text-center font-serif text-xl font-bold uppercase text-gray-800 [text-shadow:3px_3px_rgb(221_214_254)] [text-wrap:balance] max-sm:px-4 sm:text-4xl">
        Elevate Your Design Skills to New Heights.
      </h1>
    </section>
  );
};

export default HeroSection;
