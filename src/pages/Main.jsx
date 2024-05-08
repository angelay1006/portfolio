import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/Home.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let section = location.hash.replace('#', '');
            scroller.scrollTo(
                section,
                {duration: 400, delay: 0, offset:-100}
            );
        }
    }, [location]);

    return (
        <div className="container mt-5">
            <Element name="home"><Home/></Element>
            <Element name="projects"><Projects/></Element>
            <Element name="contact"><Contact/></Element>
        </div>
    )
}

export default Main;