import React from 'react';
import NaveLogo from '../Header/Logo/NaveLogo';

const Footer = () => {
    return (
        <div>
            <div className="py-20">
                <h1 className="text-center lg:text-7xl font-bold">Let's get hyped</h1>
                <div className="flex justify-center items-center mt-3 gap-2">
                    <a className="btn px-1.5 bg-[rgb(252,184,250)] hover:-rotate-10 transition-all duration-200 hidden lg:flex">
                        Get Results <span className="bg-white p-1.5 rounded-lg">🔥</span>
                    </a>
                    <a className="btn px-1.5 bg-[rgb(252,184,250)] hover:-rotate-10 transition-all duration-200 hidden lg:flex">
                        Get Results <span className="bg-white p-1.5 rounded-lg">🔥</span>
                    </a>
                </div>
                <div  style={{
                         clipPath:"polygon(0 58%, 100% 41%, 100% 100%, 0% 100%)",}} className="flex justify-center items-center mt-3 gap-2" >
                            <NaveLogo/>

                </div>
            </div>
        </div>
    );
};

export default Footer;