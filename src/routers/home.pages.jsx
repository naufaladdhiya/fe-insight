import Hero from "../components/hero.component";
import FunFact from "../components/home-funfact/card-item.component";
import Faq from "../components/home-funfact/faq.component";
import HardwareExplanation from "../components/home-funfact/hardware-explanation";

const Home = () => {
  return (
    <div className="min-w-full min-h-screen ">
      <div className=" p-28">
        <Hero />
      </div>
      <div className="p-10 bg-gray-50">
        <div>
          <h2 className="text-5xl font-bold text-center ">Fun Fact</h2>
        </div>
        <div>
          <FunFact />
        </div>
      </div>

      <div>
        <HardwareExplanation />
      </div>

      <div>
        <Faq />
      </div>
    </div>
  );
};

export default Home;
