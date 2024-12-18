import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const VenueCarousel = () => {
  const venueCarouselRef = useRef(null);
  const gameCarouselRef = useRef(null);
  const [venues, setVenues] = useState([]);

  const scrollLeftVenues = () => {
    if (venueCarouselRef.current) {
      venueCarouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRightVenues = () => {
    if (venueCarouselRef.current) {
      venueCarouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollLeftGames = () => {
    if (gameCarouselRef.current) {
      gameCarouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRightGames = () => {
    if (gameCarouselRef.current) {
      gameCarouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/venues');
        setVenues(response.data);
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };

    fetchVenues();
  }, []);

  return (
    <section className="ml-4 sm:ml-9 mb-8 md:mr-9">
      <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg">
        {/* Carousel for Venues */}
        <div className="flex justify-between items-center mb-2 mt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 md:ml-5">Book Venues</h2>
          <a href="#all-venues" className="flex items-center font-semibold text-green-600">
            SEE ALL VENUES
            <ChevronRightIcon className="h-4 w-4 ml-1" strokeWidth={3} />
          </a>
        </div>

        <div className="relative" style={{ height: 'auto', padding: '20px 0' }}>
        <div className="flex flex-nowrap gap-4 md:ml-5" ref={venueCarouselRef} style={{ overflow: 'hidden', padding: '10px' }}>
          {venues.map((venue) => (
            <div key={venue._id} className="flex-none w-[28%] p-2"> {/* Ganti w-1/4 menjadi w-1/3 */}
              <div className="bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
                <div className="p-2">
                  <img src={venue.imageUrl} alt={venue.name} className="w-full h-32 sm:h-36 object-cover rounded-xl" />
                </div>
                <div className="flex justify-between items-center p-3">
                  <h3 className="font-bold text-sm sm:text-base">{venue.name}</h3>
                  <p className="text-yellow-500 font-semibold text-sm">{venue.rating} ({venue.reviews})</p>
                </div>
                {/* Format location with distance */}
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-1 px-3 overflow-hidden mb-2">
                  {venue.location} (~{venue.distance} Kms)
                </p>
              </div>
            </div>
          ))}
        </div>

          <div className="flex justify-center mt-4 space-x-4">
            <button onClick={scrollLeftVenues} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition">
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button onClick={scrollRightVenues} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition">
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Game Carousel */}
        <div className="flex justify-between items-center mb-2 mt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 md:ml-4">Discover Games</h2>
          <a href="#all-games" className="flex items-center font-semibold text-green-600">
            SEE ALL GAMES
            <ChevronRightIcon className="h-4 w-4 ml-1" strokeWidth={3} />
          </a>
        </div>

        <div className="relative" style={{ height: 'auto', padding: '20px 0' }}>
          <div className="flex flex-nowrap gap-4 md:ml-5" ref={gameCarouselRef} style={{ overflow: 'hidden', padding: '10px' }}>
            {venues.map((venue) => (
              <div key={venue._id} className="flex-none w-[28%] p-2">
                <div className="bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
                  <div className="p-2"> {/* Div pembungkus dengan padding */}
                    <img src={venue.imageUrl} alt={venue.name} className="w-full h-32 sm:h-36 object-cover rounded-xl" />
                  </div>
                  <div className="flex justify-between items-center p-3">
                    <h3 className="font-bold text-sm sm:text-base">{venue.name}</h3>
                    <p className="text-yellow-500 font-semibold text-sm">{venue.rating} ({venue.reviews})</p>
                  </div>
                  {/* Format location with distance */}
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-1 px-3 overflow-hidden mb-2">
                    {venue.location} (~{venue.distance} Kms)
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <button onClick={scrollLeftGames} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition">
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button onClick={scrollRightGames} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition">
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueCarousel;
