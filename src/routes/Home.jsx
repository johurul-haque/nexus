import Classes from '../Layouts/Classes';
import HeroSection from '../Layouts/HeroSection';
import Instructors from '../Layouts/Instructors';

const Home = () => {
  return (
    <main className="container-padding">
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <Classes />
        <Instructors />
      </div>
    </main>
  );
};
export default Home;
