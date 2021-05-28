import React, { useState } from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Startpage from '../components/Startpage';
import Work from '../components/work';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Startpage />
            <About />
            <Work />
            <Contact />
        </>
    )
}

export default Home
