import React, { useEffect, useRef, useState } from 'react';
import NavButton from './NavButton';
import NaveLogo from '../Logo/NaveLogo';

const NAV_LINKS = [
    { label: "Expertises", href: "#" },
    { label: "Work", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 40) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
                setIsOpen(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = NAV_LINKS.map(({ label, href }) => (
        <div key={label}>
            <li className="py-2 px-1.5">
                <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg transition-colors  duration-200 hover:text-white cursor-pointer"
                >
                    <NavButton>{label}</NavButton>
                </a>
            </li>
        </div>
    ));

    return (
        <>
            <div className="h-24" />
            <div
                className={`fixed inset-x-0 top-0 z-50 px-2 py-3 transition-transform duration-300 ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
            <div className="navbar mx-auto max-w-7xl   px-4 ">

                {/* Logo — left */}
                <div className="navbar-start">
                    <NaveLogo />
                </div>

                {/* Nav links — center (desktop only) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal bg-white rounded-lg">
                        {navItems}
                    </ul>
                </div>

                {/* Right side */}
                <div className="navbar-end flex items-center gap-2">

                    {/* CTA button — desktop only */}
                    <a className="btn px-1.5 bg-[rgb(252,184,250)] hover:-rotate-10 transition-all duration-200 hidden lg:flex">
                        Get Results <span className="bg-white p-1.5 rounded-lg">🔥</span>
                    </a>

                    {/* Animated Hamburger — mobile only */}
                    <div className="lg:hidden relative ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            // className="btn   flex flex-col justify-center items-center w-10 h-10 gap-0"
                             className={`btn flex flex-col justify-center items-center w-10 h-10 gap-0 border-none transition-colors duration-300 ${
                                isOpen ? 'bg-white' : 'bg-[rgb(252,184,250)]'
                             }`}
                            aria-label="Toggle menu"
                        >
                            {/* Top bar */}
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
                                ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                            />
                            {/* Middle bar */}
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out my-1
                                ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
                            />
                            {/* Bottom bar */}
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
                                ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                            />
                        </button>

                        {/* Dropdown */}
                        {isOpen && (
                            <ul className="absolute right-0 top-12 z-10 w-72 rounded-3xl bg-[rgb(252,184,250)] p-4 text-center shadow animate-[slideDown_0.5s_ease-out] sm:w-96">
                                {navItems}
                                <li className="mt-2 px-1.5">
                                    <a className="btn w-40 bg-black text-white hover:-rotate-10 transition-all duration-200">
                                        Get Results <span className="bg-white p-1.5 rounded-lg">🔥</span>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>

                </div>
            </div>
            </div>

            <style>{`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-100px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
};

export default Navbar;
