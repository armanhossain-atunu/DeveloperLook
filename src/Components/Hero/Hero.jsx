import React from 'react';
import HeroCared from './HeroCared';
import Annie from '../../assets/Annie.webp';
import { ArrowDown, MoveRight } from 'lucide-react';
import Button from './ScrollDwone';

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
          <div className=" mt-10 flex flex-col lg:flex-row items-end gap-10">
            <div className='w-1/3'>
                <img src={Annie} alt="" className='w-60 h-60 rounded-xl'/>
            </div>
            <div className='w-1/3'>
                <p>
                    We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                </p>
                <button className="mt-10 bg-transparent border flex justify-between gap-3 items-center p-2 rounded-lg text-xl font-bold  transition-colors duration-300">
                   Leer ons kennen <span className="bg-black text-white rounded-lg p-3"><MoveRight /></span>
                </button>
            </div>
          <div className="w-1/3">
  <Button></Button>
</div>
          </div>
        </div>
    );
};

export default Hero;