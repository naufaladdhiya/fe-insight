import Hero from '../components/hero.component';
import FunFact from '../components/home-funfact/card-item.component';

const Home = () => {
  return (
    <div className=" min-w-full min-h-screen ">
      <div className=" p-28">
        <Hero />
      </div>
      <div className="bg-gray-50 p-10">
        <div>
          <h2 className="text-5xl font-bold text-center ">Fun Fact</h2>
        </div>
        <div >
          <FunFact />
        </div>
      </div>
    </div>
  );
};

export default Home;
