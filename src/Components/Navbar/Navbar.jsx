import React, { useState, useEffect } from 'react';
import { VscMenu } from 'react-icons/vsc';
import Logo from './icons/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";

import { navLinks, navRight } from './Data';
import './Navbar.css'
export const Navbar = () => {
    const [navLink, setNavLink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navLinksElement = document.querySelector('.nav-links');
            const navElement = document.querySelector('.nav');
            if (navLinksElement) {
                if (window.innerWidth < 1024) {
                    navLinksElement.classList.add('hide');
                    setNavLink(false);
                }
            }
            if (navElement) {
                navElement.classList.toggle('navShadow', window.scrollY > 0);
                setNavLink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            <div className="container nav-container">
                <Link to={'/'} className='logo'>
                    <img src={Logo} alt="Logo" />
                </Link>

                <ul className={`nav-links ${navLink ? 'show' : 'hide'}`}>
                    {navLinks.map(({ name, path }, index) => (
                        <li key={index}>
                            <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="nav-right">
                    {navRight.managements.map((item, index) => (
                        <Link key={index}  className='management-icons' to={item.link}>
                            <item.icon />
                        </Link>
                    ))}
                    <button className="menu-button" onClick={() => setNavLink(!navLink)}>
                        {!navLink ? <VscMenu /> : <IoIosCloseCircleOutline />}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
