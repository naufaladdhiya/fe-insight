import Hero from '../components/hero.component';
import FunFact from '../components/home-funfact/card-item.component';
import CardModal from '../components/category-detail/card-modal.component';

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
        <div >
          <FunFact />
          <CardModal />
        </div>
      </div>
    </div>
  );
};

export default Home;
