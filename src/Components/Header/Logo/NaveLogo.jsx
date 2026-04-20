import React from 'react';
import Logo from '../../../assets/Logo.svg';

const NaveLogo = ({ className = "w-40 h-20" }) => {
    return (
        <div>
            <a href="/">
                <img src={Logo} alt="Nave Logo" className={className} />
            </a>
        </div>
    );
};

export default NaveLogo;
