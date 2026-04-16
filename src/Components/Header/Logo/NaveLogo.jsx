import React from 'react';
import Logo from '../../../assets/Logo.svg';
const NaveLogo = () => {
    return (
        <div>
            <a href="/">
                <img src={Logo} alt="Nave Logo" className="w-40 h-20" />
            </a>
        </div>
    );
};

export default NaveLogo;