import React from 'react';
import './CS2.css';
import code_icon from '../assets/code_icon.svg';

const CS2 = () => {
  return (
    <div className="container-fluid cs-container">

      <h1 className="display-4 mt-5 mb-4"> responsive redesign </h1>
      <div style={{ display: 'flex', justifyContent: 'start', maxWidth: '600px' }}>
        <a href="https://github.com/angelay1006/responsive_redesign" className="btn btn-secondary" role="button" aria-pressed="true" target="_blank">Access GitHub Repository Here</a>
      </div>


      {/* overview heading */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Overview {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* Overview content */}
      <div className="row mt-2 col-md-7">
        <div className="overview-content"> {/* Matching the column size of the heading */}
          <p className="overview-text">Welcome to the Responsive Redesign project! For my UI/UX course at Brown University, I took on the challenge of transforming the outdated Metro Nails Salon website into a modern, accessible online presence. As the sole designer and developer, I was responsible for every step: from the initial research and sketching, through wireframing and creating high-fidelity designs, to finally coding the responsive website.</p>
        </div>
      </div>


      {/* context heading */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Context {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* context content */}
      <div className="row mt-2 col-md-7">
        <div className="overview-content"> {/* Matching the column size of the heading */}
          <p className="overview-text">The original Metro Nails Salon website was a prime candidate for a redesign. Made via Google sites, the original website was inefficient in areas such as business hour visibility and online contact functionality, challenging in terms of learnability with inconsistent information and navigation issues, and lacked essential accessibility features. My goal was to improve the overall user experience, making the site not only more attractive but also more functional and accessible to a diverse group of users.</p>
        </div>
      </div>

      {/* research */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Research {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* research content */}
      <div className="row mt-2 col-md-7">
        <div className="overview-content"> {/* Matching the column size of the heading */}
          <p className="overview-text">Welcome to the Responsive Redesign project! For my UI/UX course at Brown University, I took on the challenge of transforming the outdated Metro Nails Salon website into a modern, accessible online presence. As the sole designer and developer, I was responsible for every step: from the initial research and sketching, through wireframing and creating high-fidelity designs, to finally coding the responsive website.</p>
        </div>
      </div>

      {/* process */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Process {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* process content */}
      <div className="row mt-2 col-md-7">
        <div className="overview-content"> {/* Matching the column size of the heading */}
          <p className="overview-text">Welcome to the Responsive Redesign project! For my UI/UX course at Brown University, I took on the challenge of transforming the outdated Metro Nails Salon website into a modern, accessible online presence. As the sole designer and developer, I was responsible for every step: from the initial research and sketching, through wireframing and creating high-fidelity designs, to finally coding the responsive website.</p>
        </div>
      </div>

      {/* solution */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Solution {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* solution content */}
      <div className="row mt-2 col-md-7">
        <div className="overview-content"> {/* Matching the column size of the heading */}
          <p className="overview-text">Welcome to the Responsive Redesign project! For my UI/UX course at Brown University, I took on the challenge of transforming the outdated Metro Nails Salon website into a modern, accessible online presence. As the sole designer and developer, I was responsible for every step: from the initial research and sketching, through wireframing and creating high-fidelity designs, to finally coding the responsive website.</p>
        </div>
      </div>


      {/* learnings */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Learning {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* learnings content */}
      <div className="row mt-2 col-md-7">
        <div className="overview-content"> {/* Matching the column size of the heading */}
          <p className="overview-text">Welcome to the Responsive Redesign project! For my UI/UX course at Brown University, I took on the challenge of transforming the outdated Metro Nails Salon website into a modern, accessible online presence. As the sole designer and developer, I was responsible for every step: from the initial research and sketching, through wireframing and creating high-fidelity designs, to finally coding the responsive website.</p>
        </div>
      </div>


      {/* conclusion */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Conclusion {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* conclusion content */}
      <div className="row mt-2 col-md-7">
        <div className="overview-content"> {/* Matching the column size of the heading */}
          <p className="overview-text">Welcome to the Responsive Redesign project! For my UI/UX course at Brown University, I took on the challenge of transforming the outdated Metro Nails Salon website into a modern, accessible online presence. As the sole designer and developer, I was responsible for every step: from the initial research and sketching, through wireframing and creating high-fidelity designs, to finally coding the responsive website.</p>
        </div>
      </div>

    </div>
  );
}

export default CS2;