import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import DATA_cover from '../assets/DATA_cover.png';
import RR_cover from '../assets/RR_cover.png';
import ID_cover from '../assets/ID_cover.svg'

const Projects = () => {
    return (
        <div className="projects-container mt-3">
            <h2 className="display-4 text-center mb-4"> projects </h2>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={RR_cover} class="card-img-top"
                            alt="cover of responsively redesigned website" />
                        <div class="card-body">
                            <h5 class="card-title"> responsive redesign </h5>
                            <p class="card-text">
                                transforming the website of a local business into a responsive online presence with 
                                a modern brand aesthetic
                            </p>
                            <Link to="/CS1" className="btn btn-primary view-more">View More</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={ID_cover} class="card-img-top"
                            alt="demo of driver AI platform" />
                        <div class="card-body">
                            <h5 class="card-title"> iterative design</h5>
                            <p class="card-text"> creating a tailored onboarding process for Driver AI's platform, emphasizing user-centric design and iterative refinement </p>
                            <Link to="/CS2" className="btn btn-primary view-more">View More</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={DATA_cover} class="card-img-top"
                            alt="graph for data science project" />
                        <div class="card-body">
                            <h5 class="card-title">global flights emissions analysis</h5>
                            <p class="card-text">forecasting CO2 emissions from global flights via the machine learning pipeline</p>
                            <Link to="/CS3" className="btn btn-primary view-more">View More</Link>
                        </div>
                    </div>
                </div>
            </div>


            <p className="h5 text-center mt-5"> more coming soon...</p>
        </div>
    )
}


export default Projects;
