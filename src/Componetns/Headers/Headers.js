import { Navbar } from 'flowbite-react';
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Headers = () => {
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Online||ReStAuReNt
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <CustomLink to = '/'
                    >
                        Home
                    </CustomLink>
                    <CustomLink to = "/about"
                    className='text-center'>
                        About
                    </CustomLink>
                    <CustomLink to="/Services"
                    className='text-center'>
                        Services
                    </CustomLink>
                    <CustomLink to="/Pricing"
                    className='text-center'>
                        Pricing
                    </CustomLink>
                    <CustomLink to="/Contact"
                    className='text-center'>
                        Contact
                    </CustomLink>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Headers;