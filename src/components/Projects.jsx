import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import CS1 from '../pages/CS1.jsx';
import CS2 from '../pages/CS2.jsx';
import CS3 from '../pages/CS3.jsx';

const Projects = () => {
    return (
        <div className="projects-container mt-3">
            <h2 className="display-4 text-center mb-4"> projects </h2>

            {/* <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="project-card text-center d-flex flex-column justify-content-center align-items-center">
                        <h3> Responsive Redesign </h3>
                        <p> Transforming the website of a local business into a responsive online presence with a modern brand aesthetic </p>
                        <Link to="/cs1" className="btn btn-primary">View More</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="project-card">
                        <h3> Iterative Design </h3>
                        <p> Creating a tailored onboarding process for Driver AI's platform, emphasizing user-centric design and iterative refinement</p>
                        <Link to="/cs2" className="btn btn-primary">View More</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="project-card">
                        <h3> Global Flights Emissions Analysis </h3>
                        <p> Forecasting CO2 emissions from global flights via the machine learning pipeline.</p>
                        <Link to="/cs3" className="btn btn-primary">View More</Link>
                    </div>
                </div>
            </div> */}

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
                            alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                            alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top"
                            alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                additional content.</p>
                        </div>
                    </div>
                </div>
            </div>


            <p className="h5 text-center mt-5"> more coming soon...</p>
        </div>
    )
}


export default Projects;
