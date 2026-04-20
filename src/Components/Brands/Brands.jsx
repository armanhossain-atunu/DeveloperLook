import React from "react";
import styled from "styled-components";

const brands = [
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg", name: "KNLTB" },
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg", name: "Nike" },
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg", name: "Adidas" },
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg", name: "Wilson" },
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg", name: "KNLTB" },
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg", name: "Adidas" },
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg", name: "Wilson" },
    { image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg", name: "Wilson" },

];

const QUANTITY = brands.length; // ← always in sync

const Brands = () => {
    return (
        <StyledWrapper $quantity={QUANTITY} className="py-10">
            <h1 className=" mx-5 mb-5  lg:text-5xl font-bold">These brands <br /> got hyped.</h1>
            <div className="slider">
                <div className="list">
                    {brands.map((brand, index) => (
                        <div
                            className="item lg:border border-blue-200 rounded-lg"
                            key={index}
                            style={{ "--position": index + 1 }}
                        >
                            <div className="card">
                                <img src={brand.image} alt={brand.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  /* Default (mobile first) */
  --width: 110px;
  --height: 70px;
  --quantity: ${({ $quantity }) => $quantity};
  --duration: 20s;

  /* Tablet */
  @media (min-width: 640px) {
    --width: 140px;
    --height: 90px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    --width: 180px;
    --height: 110px;
  }

  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    position: relative;

    mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  }

  .list {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun var(--duration) linear infinite;

    animation-delay: calc(
      (var(--duration) / var(--quantity)) * (var(--position) - 1) - var(--duration)
    );
  }

  @keyframes autoRun {
    from { left: 100%; }
    to   { left: calc(var(--width) * -1); }
  }

  .slider:hover .item {
    animation-play-state: paused;
  }

  .card {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
   

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

export default Brands;