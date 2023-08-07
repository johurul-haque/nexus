import About from '../Layouts/home/About';
import BeInstructor from '../Layouts/home/BeInstructor';
import Classes from '../Layouts/home/Classes';
import Faq from '../Layouts/home/FAQ';
import HeroSection from '../Layouts/home/HeroSection';
import Instructors from '../Layouts/home/Instructors';
import Services from '../Layouts/home/Services';
import Testimonial from '../Layouts/home/Testimonial';
import Animate from '../components/Animate';

const Home = () => {
  return (
    <Animate className="container-padding">
      <HeroSection />
      <Classes />
      <Instructors />
      <Services />
      <Testimonial />
      <Faq />
      <BeInstructor />
      <About />
    </Animate>
  );
};
export default Home;
