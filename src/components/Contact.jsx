import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import github from '../assets/github.svg';
import mail from '../assets/mail.svg';
import linkedin from '../assets/linkedin.svg';


const Contact = () => {
    return (
        <div className="container-fluid">
            <h2 className="display-4 text-center mb-4">contact</h2>
            <h6 className="h6 text-center mb-5"> if you like my work, feel free to contact me!</h6>
            <div className="row justify-content-center pb-5">
                <div className="col-auto d-flex align-items-center justify-content-center">
                    <a href="https://github.com/angelay1006" className="contact-github">
                        <img src={github} alt="GitHub logo" className="mr-2"/>
                    </a>
                </div>
                <div className="col-auto d-flex align-items-center justify-content-center">
                    <a href="mailto:angela1006yeung@gmail.com" className="contact-email">
                        <img src={mail} alt="Email logo" className="mr-2"/>
                    </a>
                </div>
                <div className="col-auto d-flex align-items-center justify-content-center">
                    <a href="https://www.linkedin.com/in/angela-yeung-203134205/" className="contact-linkedin">
                        <img src={linkedin} alt="LinkedIn logo" className="mr-2"/>
                    </a>
                </div>
            </div>
        </div>
    );
}




export default Contact;