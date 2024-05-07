import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CS1 from './CS1.jsx';
import CS2 from './CS2.jsx';
import CS3 from './CS3.jsx';

const Projects = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4"> projects </h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>Details about Project 1.</p>
                        <Link to="/cs1" className="btn btn-primary">View More</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>Details about Project 2.</p>
                        <Link to="/cs2" className="btn btn-primary">View More</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="project-card">
                        <h3>Project 3</h3>
                        <p>Details about Project 3.</p>
                        <Link to="/cs3" className="btn btn-primary">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;
