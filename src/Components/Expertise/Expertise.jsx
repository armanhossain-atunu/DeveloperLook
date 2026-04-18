import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MoveRight } from 'lucide-react';

const Expertise = () => {
    return (
        <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            //   pagination={{ clickable: true }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper w-7xl mx-auto mt-20"
            style={{ height: '100vh' }}
        >
            <SwiperSlide>
                <div className=" h-[500px] f bg-white rounded-4xl shadow-lg p-10">
                     <a href="#social-strategy" className="text-xl px-3 py-1 rounded-lg mb-10 font-bold bg-amber-200 ">Expertise</a>
                    <div className="h-full flex lg:justify-between flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <a href="#social-strategy" className="text-6xl font-bold">social strategy </a>
                            <p className="mt-5 text-2xl font-bold">
                                <span>Slimme strategie. Sterke start.</span>
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt
                            </p>
                            <button className="mt-10 bg-[#fa5424]  rotate-0 hover:rotate-6 flex justify-between gap-3 items-center p-2 rounded-lg text-xl font-bold  transition-colors duration-300">
                                Leer ons kennen <span className="bg-black text-white rounded-lg p-3"><MoveRight /></span>
                            </button>
                        </div>
                        <div className="lg:w-1/2 flex justify-end items-center">
                            <div className="w-80 h-full bg-[#fa5424] p-3 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                                    <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" h-[500px] f bg-[#fcb8fa] rounded-4xl shadow-lg p-10">
                     <a href="#social-strategy" className="text-xl px-3 py-1 rounded-lg mb-10 font-bold bg-amber-200 ">Expertise</a>
                    <div className="h-full flex lg:justify-between flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <a href="#social-strategy" className="text-6xl font-bold">social strategy </a>
                            <p className="mt-5 text-2xl font-bold">
                                <span>Slimme strategie. Sterke start.</span>
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt
                            </p>
                            <button className="mt-10 bg-[#fa5424]  rotate-0 hover:rotate-6 flex justify-between gap-3 items-center p-2 rounded-lg text-xl font-bold  transition-colors duration-300">
                                Leer ons kennen <span className="bg-black text-white rounded-lg p-3"><MoveRight /></span>
                            </button>
                        </div>
                        <div className="lg:w-1/2 flex justify-end items-center">
                            <div className="w-80 h-full bg-[#fa5424] p-3 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                                    <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" h-[500px] f bg-white rounded-4xl shadow-lg p-10">
                     <a href="#social-strategy" className="text-xl px-3 py-1 rounded-lg mb-10 font-bold bg-amber-200 ">Expertise</a>
                    <div className="h-full flex lg:justify-between flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <a href="#social-strategy" className="text-6xl font-bold">social strategy </a>
                            <p className="mt-5 text-2xl font-bold">
                                <span>Slimme strategie. Sterke start.</span>
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt
                            </p>
                            <button className="mt-10 bg-[#fa5424]  rotate-0 hover:rotate-6 flex justify-between gap-3 items-center p-2 rounded-lg text-xl font-bold  transition-colors duration-300">
                                Leer ons kennen <span className="bg-black text-white rounded-lg p-3"><MoveRight /></span>
                            </button>
                        </div>
                        <div className="lg:w-1/2 flex justify-end items-center">
                            <div className="w-80 h-full bg-[#fa5424] p-3 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                                    <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" h-[500px] f bg-[#33c791] rounded-4xl shadow-lg p-10">
                     <a href="#social-strategy" className="text-xl px-3 py-1 rounded-lg mb-10 font-bold bg-amber-200 ">Expertise</a>
                    <div className="h-full flex lg:justify-between flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <a href="#social-strategy" className="text-6xl font-bold">social strategy </a>
                            <p className="mt-5 text-2xl font-bold">
                                <span>Slimme strategie. Sterke start.</span>
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt
                            </p>
                            <button className="mt-10 bg-[#fa5424]  rotate-0 hover:rotate-6 flex justify-between gap-3 items-center p-2 rounded-lg text-xl font-bold  transition-colors duration-300">
                                Leer ons kennen <span className="bg-black text-white rounded-lg p-3"><MoveRight /></span>
                            </button>
                        </div>
                        <div className="lg:w-1/2 flex justify-end items-center">
                            <div className="w-80 h-full bg-[#fa5424] p-3 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                                    <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" h-[500px] f bg-[#0d8dff] rounded-4xl shadow-lg p-10">
                     <a href="#social-strategy" className="text-xl px-3 py-1 rounded-lg mb-10 font-bold bg-amber-200 ">Expertise</a>
                    <div className="h-full flex lg:justify-between flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <a href="#social-strategy" className="text-6xl font-bold">social strategy </a>
                            <p className="mt-5 text-2xl font-bold">
                                <span>Slimme strategie. Sterke start.</span>
                                We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt
                            </p>
                            <button className="mt-10 bg-[#fa5424]  rotate-0 hover:rotate-6 flex justify-between gap-3 items-center p-2 rounded-lg text-xl font-bold  transition-colors duration-300">
                                Leer ons kennen <span className="bg-black text-white rounded-lg p-3"><MoveRight /></span>
                            </button>
                        </div>
                        <div className="lg:w-1/2 flex justify-end items-center">
                            <div className="w-80 h-full bg-[#fa5424] p-3 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                                    <source src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
         
        </Swiper>
    );
};

export default Expertise;