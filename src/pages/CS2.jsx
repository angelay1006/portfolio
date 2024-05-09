import React from 'react';
import './CS2.css';
import code_icon from '../assets/code_icon.svg';


const CS2 = () => {
  return (
    <div className="container-fluid cs-container">

      <h1 className="display-4 mt-5 mb-4"> iterative design </h1>
      <div style={{ display: 'flex', justifyContent: 'start', maxWidth: '600px' }}>
        <a href="https://www.figma.com/file/h8AXHoP5N3VFwiCdnVMIti/Driver-AI-Onboarding-Wireframe?type=design&node-id=0%3A1&mode=design&t=nFrdty5zqNCuAFzQ-1" className="btn btn-secondary" role="button" aria-pressed="true" target="_blank">Access Figma File Here</a>
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
          <p className="section-content">Welcome to my Iterative Design project for Brown University's UI/UX course. In this collaborative project, our team designed an onboarding process for Driver AI, a startup that uses large language models (LLMs) to transform the creation of technical documentation. As part of a collaborative team (consisting of myself, Carlos Betancur, Adam von Bismarck, and Matthew Boranian), my role involved direct communication with the startup's founder, engaging in ideation and design phases, and ensuring our designs seamlessly integrated with the existing Driver AI aesthetic.</p>
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
          <p className="section-content"><a href="https://www.driverai.com/" aria-pressed="true" target="_blank" >Driver AI</a> significantly speeds up the creation of technical documentation but we discovered that new users were struggling to grasp and utilize the app’s core functionalities effectively. To improve user satisfaction, our challenge was to create an onboarding process from scratch. </p>
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
          <ul class="bulletpoint-content">
            <li>The project brief, kindly provided to us by the startup, included several insights from user surveys regarding the product. After reviewing this existing user feedback, we discovered that users would often miss new, useful features like in-app modification of technical documents — this spoke to the complexity and unfamiliarity of the interface. In order to best address the startup's needs, we asked for clarification on the project brief to better understand the problem. Key points included: </li>
            <ul>
              <li>Getting appropriate credentials to log into the app ourselves and explore the experience through the eyes of a new user. </li>
              <li> Understanding the target user base</li>
              <li> Pick out a list of key priorities to be incorporated into the design of a streamlined onboarding process </li>
            </ul>
            <li> This user-focused research reinforced the importance of simplicity and direct guidance in user interface design. </li>
          </ul>
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
        <div className="col-md-4">
          <p className="section-content">In refining the onboarding experience for Driver AI, our team used iterative design based on peer and founder feedback to ensure the tutorial was helpful yet unobtrusive due to the app's complexity. Our initial design featured a single user flow with central popups and fixed tutorial prompts, which was adjusted after feedback highlighted the need for more efficiency and less disruption. The updated design incorporated two user flows tailored to specific goals—creating/editing notes or reviewing technical documentation—with each flow having distinct tutorial sequences, progress markers, and a hoverable information icon for revisiting instructions. This allowed for a flexible, user-friendly tutorial experience, embodying our commitment to minimal intrusiveness with options to exit the tutorial at any point.</p>
        </div>
        <div className="col-md-7">
          <iframe
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16 / 9',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}
            src="https://www.loom.com/embed/c6be1e038e6543c78c40add9aea0eaf4?sid=bbef203d-773e-4b54-a529-5a3d063df1aa"
            allowFullScreen>
          </iframe>
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
        <div className="col-md-4">
          <p className="section-content">In refining the onboarding experience for Driver AI, our team used iterative design based on peer and founder feedback to ensure the tutorial was helpful yet unobtrusive due to the app's complexity. Our initial design featured a single user flow with central popups and fixed tutorial prompts, which was adjusted after feedback highlighted the need for more efficiency and less disruption. The updated design incorporated two user flows tailored to specific goals—creating/editing notes or reviewing technical documentation—with each flow having distinct tutorial sequences, progress markers, and a hoverable information icon for revisiting instructions. This allowed for a flexible, user-friendly tutorial experience, embodying our commitment to minimal intrusiveness with options to exit the tutorial at any point.</p>
        </div>
        <div className="col-md-7">
          <iframe
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16 / 9',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fh8AXHoP5N3VFwiCdnVMIti%2FDriver-AI-Onboarding-Wireframe%3Ftype%3Ddesign%26node-id%3D57%253A6%26mode%3Ddesign%26t%3D2tJ33rHFIsQQebwR-1"
            allowFullScreen>
          </iframe>
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
          <p> <i> user-centered design is key.</i> </p>
          <p> Our initial clarification of the project brief was extremely useful in defining challenges in the design process. Also enlightening was directly accessing the app as a user — it helped us empathize with new users and understand the obstacles they faced, so that the onboarding process was not just functional but also intuitive. </p>
        </div>
        <div className="col-md-3 three-col-content text-star t">
          <p> <i>flexibility in design iterations.  </i></p>
          <p>  Each round of feedback provided new insights that significantly shaped our design decisions going forward. Early sketches and low-fidelity wireframes served as a conversation starter among the team and founder, rather than final solutions. This openness to change helped a lot in developing an intuitive and effective onboarding process. </p>
        </div>
        <div className="col-md-3 three-col-content text-start">
          <p> <i> balancing guidance & user autonomy. </i></p>
          <p>  One of the major design challenges was balancing the amount of guidance provided through the tutorial without overwhelming the user. At first, our designs varied widely in how instructional information was presented to the users, but through critiques, we learned to prioritize providing clear, non-intrusive guidance while offering users the autonomy to explore the app at their own pace.  </p>
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
          <p className="section-content">This team project resulted in a tailored onboarding process that not only addressed the initial pain points faced by new users, but also integrates with the existing aesthetic of the Driver AI platform. The iterative process, which involved both peer and founder critiques, were extremely helpful in refining our approach, and ensured that each tutorial component was intuitive and minimally intrusive. The final design, featuring customizable tutorial flows and clear navigational cues, would significantly improve user experience by making more hidden functionalities accessible and understandable. This experience has left me with a deeper understanding of collaborative, iterative design and how to effectively address diverse user needs.</p>
        </div>
      </div>
    </div>
  );
}

export default CS2;