import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Expertise from '../Components/Expertise/Expertise';
import Content from '../Components/Content/Content';
import Brands from '../Components/Brands/Brands';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
          <Navbar/>
          <Hero/>
          <Expertise/>
          <Content/>
          <Brands/>
          <hr className="mx-15 text-gray-400" />
          <Footer/>
        </div>
    );
};

export default HomePage;