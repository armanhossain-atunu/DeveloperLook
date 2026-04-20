"use client";
import React, { useRef } from "react";
import ContentButton from "./ContentButton";

const ContentCard = () => {
    const videoRefs = useRef([]);

    const handlePlay = (index) => {
        videoRefs.current[index]?.play();
    };

    const handlePause = (index) => {
        videoRefs.current[index]?.pause();
        videoRefs.current[index].currentTime = 0;
    };

    // 👉 Different videos here
    const cards = [
        {
            video: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
            title: "Van nul naar vol, binnen 3 wekens",
            button: "bullit",
             color: "#fa5424",
             top:"180px"
        },
        {
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            title: "Zacht in smaak, sterk in beeld",
            button: "Roasta",
            color: "#3b82f6",
            top:"90px"
        },
        {
            video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
            title: "Content die écht smaakt (en raakt)",
            button: "Loco",
            color: "#f43f5e",
            top:"0"
        },
    ];

    return (
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative lg:w-60 h-44 sm:h-56 lg:h-80 hover:rotate-4 lg:hover:rotate-12 transition-transform duration-300 rounded-xl overflow-hidden"
                     style={{
                                    border: `6px solid ${card.color}`,
                                    marginTop:`${card.top}`

                                }}
                    onMouseEnter={() => handlePlay(index)}
                    onMouseLeave={() => handlePause(index)}
                >
                    <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                    >
                        <source src={card.video} type="video/mp4" />
                    </video>

                    {/* Overlay */}
                    <div className="absolute bottom-[10px] left-[10px] right-[10px] overflow-hidden h-60 z-10">
                        <div className="w-full h-full rounded-lg overflow-hidden">
                            <div
                                style={{
                                    backgroundColor: card.color,

                                    clipPath:
                                        "polygon(0 58%, 100% 41%, 100% 100%, 0% 100%)",
                                }}
                                className="w-full h-full bg-[#fa5424]/80 p-3 flex flex-col justify-end"
                            >
                                <div className="flex justify-end lg:mb-2">
                                    <ContentButton />
                                </div>

                                <h1 className="text-sm lg:text-xl font-normal text-white">
                                    {card.title}
                                </h1>

                                <button className="flex items-center gap-1 text-[10px] text-white/80">
                                    <span className="bg-white/30 px-2 py-1 rounded-lg">
                                        {card.button}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContentCard;