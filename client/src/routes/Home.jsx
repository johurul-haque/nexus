import About from '../Layouts/home/About';
import Classes from '../Layouts/home/Classes';
import HeroSection from '../Layouts/home/HeroSection';
import Instructors from '../Layouts/home/Instructors';
import Animate from '../components/Animate';

const Home = () => {
  return (
    <Animate className="container-padding">
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <Classes />
        <Instructors />
        <About />
      </div>
    </Animate>
  );
};
export default Home;
