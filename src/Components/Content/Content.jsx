import { MoveRight } from 'lucide-react';
import React from 'react';
import ContentCard from './ContentCard';

const Content = () => {
    return (
        <div className='mx-2 lg:py-10 '>
            <div className="lg:w-1/2 lg:ml-40 ">
                <h1 className="text-5xl lg:text-7xl font-bold ">Content <br className='hidden lg:flex' /> dat scoort.</h1>
                <p className="lg:w-2/3 lg:text-3xl font-bold mt-5">Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.</p>
                <button className="mt-10 border rotate-0 hover:rotate-6 flex justify-between gap-3 items-center p-2 rounded-lg text-xl font-bold  transition-colors duration-300">
                    Leer ons kennen <span className="bg-black text-white rounded-lg p-3"><MoveRight /></span>
                </button>
            </div>
           <ContentCard></ContentCard>
        </div>
    );
};

export default Content;