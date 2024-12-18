import Header from "../components/header"; 
import VenueCarousel from "../components/elements/Venue/index";
import HomeSection from "../components/elements/HomeSection";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-0 bg-gray-100 min-h-screen">
        <HomeSection />
        <VenueCarousel />
      </main>
    </div>
  );
};

export default Home;
