import React from 'react';
import HeroCared from './HeroCared';

const Hero = () => {
    return (
        <div className="mx-2 py-20">
            <h1 className="text-7xl font-bold ">Get Hyped. Get <br /> Noticed. Get Results.</h1>
            <h2 className="text-2xl font-bold mt-5">Klaar met gokken op content <br />
                die niets oplevert?
            </h2>
            <HeroCared></HeroCared>
            <p className="lg:w-1/2 lg:ml-40  mt-20 text-4xl font-bold">
           Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </p>
          <div>
            <div>
                <img src="" alt="" />
            </div>
          </div>
        </div>
    );
};

export default Hero;