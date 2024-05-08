import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import geometry from '../assets/geometry.svg';




const Home = () => {
    return (
        <div className="container-fluid home-container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-2">Hi. I'm Angela Yeung</h1>
                    <p className="subtitle">I’m passionate about developing environmentally and socially responsible computing solutions.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;

