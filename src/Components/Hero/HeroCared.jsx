import React from 'react';

const HeroCared = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-10 lg:space-y-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10">
            <div className="w-65 h-96  hover:mx-10 bg-[#0d8dff] rounded-lg p-7 rotate-6  hover:rotate-0 transition-transform duration-300 text-center">
                <h1 className="text-4xl font-bold ">10M+</h1>
                <p className="text-lg mt-45">Organische views</p>
                <hr />
                <span>Groei door slimme content</span>
            </div>
            <div className="w-65 h-96 hover:mx-10 rounded-lg -rotate-12 mt-10 hover:mt-0 hover:rotate-0 transition-transform duration-300 text-center">
                <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="w-65 h-96  hover:mx-10 bg-green-400 rounded-lg p-7 -rotate-18 hover:rotate-0 transition-transform duration-300 text-center">
                <h1 className="text-4xl font-bold ">30M+</h1>
                <p className="text-lg mt-45">Organische views</p>
                <hr />
                <span>Groei door slimme content</span>
            </div>
            <div className="w-65 h-96  hover:mx-10 rounded-lg z-50 rotate-9  hover:rotate-0 transition-transform duration-300 text-center">
                <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default HeroCared;