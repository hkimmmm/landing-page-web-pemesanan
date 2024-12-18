const HomeSection = () => {
  return (
    <section className="relative mb-8 bg-white rounded-b-3xl p-6 pb-12 shadow-md flex flex-col md:flex-row md:items-center w-full h-auto md:h-[530px] mt-0 mx-0">
      <div className="md:w-2/3 mb-6 md:mb-0 md:ml-8 flex flex-col justify-center">
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search Location"
            className="border rounded-md p-2 flex-grow max-w-sm"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-2">
            Search
          </button>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 text-center md:text-left">
          FIND PLAYERS & VENUES
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 text-center md:text-left">
          Seamlessly explore sports venues and play with sports enthusiasts just like you!
        </p>
      </div>

      <div className="md:w-1/3 flex flex-col items-center md:items-end md:mr-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-[100px] sm:h-[120px] lg:h-[160px]">
            <img
              src="https://i.pinimg.com/564x/98/46/64/984664e621af95352a6c45740ed0fce7.jpg"
              alt="Image 1"
              className="rounded-lg shadow-lg object-cover w-full h-full transition-transform transform hover:scale-105"
            />
          </div>
          <div className="w-full h-[100px] sm:h-[120px] lg:h-[160px]">
           <img
                src="https://i.pinimg.com/564x/55/58/ea/5558ea41e256974e1e06d3a1bed7ade5.jpg"
                alt="Image 2"
                className="rounded-lg shadow-lg object-cover w-full h-full transition-transform transform hover:scale-105"
            />
          </div>
          <div className="w-full h-[100px] sm:h-[120px] lg:h-[160px]">
                <img
                  src="https://i.pinimg.com/564x/30/3b/df/303bdfd029143a8c859770d87f7cfa34.jpg"
                  alt="Image 3"
                  className="rounded-lg shadow-lg object-cover w-full h-full transition-transform transform hover:scale-105"
                />
          </div>
          <div className="w-full h-[100px] sm:h-[120px] lg:h-[160px]">
                <img
                  src="https://i.pinimg.com/564x/22/10/ec/2210ecae801a49f3e242154442f176e1.jpg"
                  alt="Image 4"
                  className="rounded-lg shadow-lg object-cover w-full h-full transition-transform transform hover:scale-105"
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;