import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let section = location.hash.replace('#', '');
            scroller.scrollTo(
                section,
                {duration: 800, delay: 0, smooth: 'easeInOutQuart'}
            );
        }
    }, [location]);

    return (
        <div className="container mt-5">
            <Home/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Main;