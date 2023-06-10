import About from '../Layouts/About';
import Classes from '../Layouts/Classes';
import HeroSection from '../Layouts/HeroSection';
import Instructors from '../Layouts/Instructors';
import Animate from '../components/Animate';

const Home = () => {
  return (
    <Animate className="container-padding">
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <Classes />
        <Instructors />
        <About />

        {/* TODO: Create an extra section with animation */}
      </div>
    </Animate>
  );
};
export default Home;
