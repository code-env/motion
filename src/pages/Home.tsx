import Navbar from "../components/Navbar";
import Hero from "../components/landingpage/Hero";

const Home = () => {
  return (
    <div className=" bg-black bg-dotted-spacing-4 bg-dotted-gray-200/5">
      <div className="flex flex-col gap-20 max-w-7xl mx-auto text-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
