import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import github from '../assets/github.svg';
import mail from '../assets/mail.svg';
import linkedin from '../assets/linkedin.svg';
import profile from '../assets/profile.jpg';
import 'animate.css';


const Contact = () => {
    return (
        <div className="container-fluid flex-column justify-content-between">
            <h2 className="display-4 text-center mb-5 mt-5 custom-margin">contact</h2>
            
            {/* row for card https://getbootstrap.com/docs/4.3/components/card/#horizontal */}
            <div className="d-flex justify-content-center mb-5">
                <div class="card mb-5 mt-2">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={profile} class="card-img profile-pic" alt="profile of author"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"> About Me </h5>
                                <p class="card-text">Hello! Based in Providence, Rhode Island, I recently graduated from Brown University with a Bachelor of Science degree in Computer Science, where I concentrated in Artificial Intelligence and Security pathways. I am excited to further my expertise in these fields by pursuing a one year master's degree in Cybersecurity at Brown. </p>
                                <p class="card-text">Outside of software, I love reading literary fiction, gaming, cooking, and playing classical music. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* row for contact icons */}
            <div className="row justify-content-center">
                <div className="col-auto d-flex align-items-center justify-content-center">
                    <a href="https://github.com/angelay1006" target="_blank" className="contact-github">
                        <img src={github} alt="GitHub logo" className="mr-2"/>
                    </a>
                </div>
                <div className="col-auto d-flex align-items-center justify-content-center">
                    <a href="mailto:angela1006yeung@gmail.com" target="_blank" className="contact-email">
                        <img src={mail} alt="Email logo" className="mr-2"/>
                    </a>
                </div>
                <div className="col-auto d-flex align-items-center justify-content-center">
                    <a href="https://www.linkedin.com/in/angela-yeung-203134205/" target="_blank" className="contact-linkedin">
                        <img src={linkedin} alt="LinkedIn logo" className="mr-2"/>
                    </a>
                </div>
            </div>
            <div className="credits-container">
                <p className="text-center credits">
                    Credits for portfolio images go to{' '}  
                    <a href="https://www.figma.com/@lilith_lenihan" target="_blank" rel="noopener noreferrer" style={{ color: '#BBD48E'}} >Lilith Lenihan</a> and{''}  <a href="https://www.figma.com/@mooodswings" target="_blank" rel="noopener noreferrer" style={{ color: '#BBD48E'}}>Chris Christodoulopoulos</a> {' under CC By 4.0'}
                </p>
            </div>
        </div>
    );
}




export default Contact;