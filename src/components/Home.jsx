import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import geometry from '../assets/geometry.svg';
import 'animate.css';




const Home = () => {
    const [isHovering, setIsHovering] = useState(false);
    const headerClass = `display-2 animate__animated ${isHovering ? "animate__pulse" : ""}`;

    return (
        <div className="container-fluid home-container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className={headerClass}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    > Hi. I'm Angela Yeung 
                    </h1>
                    <p className="subtitle">I’m passionate about developing environmentally and socially responsible computing solutions.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;

