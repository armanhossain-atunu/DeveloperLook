import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Expertise from '../Components/Expertise/Expertise';

const HomePage = () => {
    return (
        <div>
          <Navbar/>
          <Hero/>
          <Expertise/>
        </div>
    );
};

export default HomePage;