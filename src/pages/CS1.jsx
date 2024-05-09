import React from 'react';
import './CS1.css';
import code_icon from '../assets/code_icon.svg';
import old_website from '../assets/responsive_redesign/og_website.png';
import wave_analysis from '../assets/responsive_redesign/wave_analysis.png';
import vdsg from '../assets/responsive_redesign/vdsg.svg';
import RR_cover from '../assets/RR_cover.png';

const CS1 = () => {
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

      {/* overview content */}
      <div className="row mt-2">
        <div className="col-md-7">
          <p className="section-content">Welcome to the Responsive Redesign project! For my UI/UX course at Brown University, I took on the challenge of transforming the outdated Metro Nails Salon website into a modern, accessible online presence. As the sole designer and developer, I was responsible for every step: from the initial research and sketching, through wireframing and creating high-fidelity designs, to finally coding the responsive website.</p>
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
      <div className="row mt-2">
        <div className="col-md-6">
          <p className="section-content">The original Metro Nails Salon website was a prime candidate for a redesign. Made via Google sites, the original website was inefficient in areas such as business hour visibility and online contact functionality, challenging in terms of learnability with inconsistent information and navigation issues, and lacked essential accessibility features. My goal was to improve the overall user experience, making the site not only more attractive but also more functional and accessible to a diverse group of users.</p>
        </div>
        <div className="col-md-6">
          <img src={old_website} alt="metro nails' original website" className="img-fluid pr-5" /> {/* Bootstrap responsive image class */}
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
      <div className="row mt-2">
        <div className="col-md-6">
          <p className="section-content">The original Metro Nails Salon website was a prime candidate for a redesign. Made via Google sites, the original website was inefficient in areas such as business hour visibility and online contact functionality, challenging in terms of learnability with inconsistent information and navigation issues, and lacked essential accessibility features. My goal was to improve the overall user experience, making the site not only more attractive but also more functional and accessible to a diverse group of users.</p>
        </div>
        <div className="col-md-6">
          <img src={wave_analysis} alt="accessibility analysis with wave tool" className="img-fluid" />
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
      <div className="row mt-2">
        <div className="col-md-6">
          <ul class="bulletpoint-content">
            <li>This redesign process began with speed sketching, where I rapidly conceptualized different layouts that would improve the visual and functional aspects of the website. This resulted in nine diverse sketches, which differed in terms of which design elements and configurations were emphasized. </li>
            <li>Moving to wireframing, I focused on mobile, desktop, and tablet views, prioritizing improved navigation and accessibility. This phase was not about the finer design details but about structuring a well-made user interface.</li>
            <li>I also developed a visual design guide early on to maintain consistency across the website. From color palettes to typography choices, I selected designs that would align with the brand and improve readability. This is also where I created high-fidelity mockups for each device type. </li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={vdsg} alt="visual design style guide" className="img-fluid" />
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
      <div className="row mt-2">
        <div className="col-md-6">
          <ul class="bulletpoint-content">
            <li>The redesigned website features a responsive layout that adjusts across all device types. Key improvements include:</li>
            <ul>
              <li><i>Navigation</i>: The navigation bar has been redesigned to be more intuitive</li>
              <li><i>Accessibility</i>: All previously identified issues have been addressed, so now the site is accessible to a broader audience.</li>
              <li><i>Visual appeal</i>:  The site now has a fresh and modern aesthetic.</li>
            </ul>
            <hr></hr>
            <li> You can find the live site <a href="https://angelay1006.github.io/responsive_redesign/" aria-pressed="true" target="_blank" >here</a>.</li>

          </ul>
        </div>
        <div className="col-md-6">
          <img src={RR_cover} alt="visual design style guide" className="img-fluid" />
        </div>
      </div>


      {/* learnings */}
      <div className="row align-items-center mt-5">
        <div className="col-auto">
          <img src={code_icon} alt="Code Icon" className="icon mr-3" />
        </div>
        <div className="col">
          <h2 className="display-6">Learnings {'    •••••••••••••••'}</h2>
        </div>
      </div>

      {/* learnings content */}
      <div className="row mt-2 gx-4">
        <div className="col-md-3 three-col-content text-start">
          <p> I learned about how HTML could play a big role in enhancing accessibility. </p>
        </div>
        <div className="col-md-3 three-col-content text-star t">
          <p> I also came across adaptability challenges in terms of font changes when resizing the screen, so I resolved to take advantage of responsive units like vh instead of absolute units for better transitions across devices.  </p>
        </div>
        <div className="col-md-3 three-col-content text-start">
          <p> This was also a lesson in how effective design tools like Figma and testing tools like WebAIM WAVE could be in identifying and addressing design issues.  </p>
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
        <div className="row mt-2"> 
          <p className="section-content">The Responsive Redesign of Metro Nails Salon's website has modernized its appearance, as well as enhanced its accessibility, leading to a better user experience that works across all devices.</p>
        </div>
      </div>
    </div>
  );
}

export default CS1;