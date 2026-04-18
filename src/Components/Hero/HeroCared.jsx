const HeroCared = () => {
  return (
    <div className="w-full  px-3">
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">

        {/* Blue stat card */}
        <div className="w-full h-44 sm:h-56 lg:h-80 bg-[#0d8dff] rounded-xl p-4 rotate-6 hover:rotate-0 transition-transform duration-300 text-center text-white flex flex-col justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold">10M+</h1>
          <div>
            <p className="text-xs sm:text-sm">Organische views</p>
            <hr className="my-1 border-white/40" />
            <span className="text-[10px] sm:text-xs opacity-80">Groei door slimme content</span>
          </div>
        </div>

        {/* Video card 1 */}
        <div className="w-full h-44 sm:h-56 lg:h-80 rounded-xl -rotate-13 hover:rotate-0 transition-all duration-300 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Green stat card */}
        <div className="w-full h-44 sm:h-56 lg:h-80 bg-green-400 rounded-xl p-4 -rotate-3 hover:rotate-0 transition-transform duration-300 text-center text-white flex flex-col justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold">30M+</h1>
          <div>
            <p className="text-xs sm:text-sm">Organische views</p>
            <hr className="my-1 border-white/40" />
            <span className="text-[10px] sm:text-xs opacity-80">Groei door slimme content</span>
          </div>
        </div>

        {/* Video card 2 */}
        <div className="w-full h-44 sm:h-56 lg:h-80 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
};

export default HeroCared;