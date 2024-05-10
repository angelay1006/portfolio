import React from 'react';
import './CS3.css';
import code_icon from '../assets/code_icon.svg';
import kaggle from '../assets/data_analysis/kaggle.png';
import results from '../assets/data_analysis/results.png';
const CS3 = () => {
  return (
    <div className="container-fluid cs-container">

      <h1 className="display-4 mt-5 mb-4"> global flights emissions analysis </h1>
      <div style={{ display: 'flex', justifyContent: 'start', maxWidth: '600px' }}>
        <a href="https://github.com/angelay1006/CO2_Emissions_Across_Flights/tree/main" className="btn btn-secondary" role="button" aria-pressed="true" target="_blank">Access GitHub Repository Here</a>
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
      <div className="row mt-2">
        <div className="col-md-7">
          <p className="section-content">In my final project for the DATA1030 course at Brown University, I focused on a critical environmental issue: forecasting CO2 emissions from global flights. This project involved the full machine learning pipeline — from cleaning data to training and evaluating models. My goal was to create a tool that predicts flight emissions based on key characteristics like flight duration and ticket price, which could influence global strategies for reducing aviation's carbon footprint.</p>
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
      <div className="row mt-2" style={{ alignItems: 'flex-start' }}>
        <div className="col-md-6">
          <ul class="bulletpoint-content">
            <li>In climate discourse, aviation holds a complex position. While it accounts for only 2.5% of global CO2 emissions, it dominates the carbon footprint of frequent travelers due to stark inequalities in flying habits. Moreover, in 2022, aviation contributed to 2% of global energy-related CO2 emissions, rebounding to 80% of pre-pandemic levels.</li>
            <ul>
              <li> <i>Accountability Gap</i>: International flights are not attributed to any country's emission accounts, falling under the 'bunker fuels' category, thus diluting national incentives for reduction.</li>
              <li> <i>Regulatory Blind Spots </i>: Non-CO2 forcings from aviation are not covered under the Paris Agreement, posing a risk of oversight.</li>
              <li> <i>Post-Pandemic Surge</i>: As international travel resumes post-COVID-19, emissions in 2022 have already reached alarming levels. Immediate interventions, ranging from low-emission fuels to operational optimization, are required to align with the Net Zero Emissions by 2050 scenario. </li>
            </ul>
            <li> This project aimed to predict CO2 emissions based on flight characteristics such as price and duration, which also assesses environmental impact assessment in the aviation industry.  </li>
          </ul>
        </div>
        <div className="section-content col-md-4">
          <p> Sources </p>
          <ul>
            <li> <a href="https://www.kaggle.com/datasets/polartech/flight-data-with-1-million-or-more-records" target="_blank"> kaggle </a></li>
            <li> <a href="https://link.springer.com/article/10.1007/s00704-022-04203-4" target="_blank"> springer.com</a></li>
          </ul>
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
          <p className="section-content">The dataset for this study was sourced from Kaggle and compiled by BarkingData, a web mining company, through web scraping techniques from various flight tracking and airline websites, especially focusing on the most popular airports across Europe, Asia, America, and Africa. You can find the dataset <a href="https://www.kaggle.com/datasets/polartech/flight-data-with-1-million-or-more-records" target="_blank">here</a>.</p>
        </div>
        <div className="col-md-6">
          <img src={kaggle} alt="kaggle dataset" className="img-fluid" />
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
        <div className="col-md-7">
          <p className="section-content">The exploratory data analysis (EDA) focused on understanding the correlation and distribution of the features, especially price and duration with emissions. A key decision here was to limit the dataset to single-leg flights to enhance the accuracy of the emission calculations. Features irrelevant to emission predictions were removed, and the dataset was split considering its non-iid nature. This ensured a representative distribution across different price levels.  </p>
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
          <p className="section-content">The project culminated in the development of a machine learning pipeline that can predict flight emissions based on the training set. Various algorithms were evaluated, including linear models with L1 and L2 regularization, as well as more complex models like Random Forest and XGBoost. The XGBoost model performed the best, demonstrating high accuracy and stability across different tests. Fine-tuned to predict emissions effectively, this model considers the most influential features such as destination airport code and flight price. </p>
          <p className="section-content"> You can find the whole report <a href="https://github.com/angelay1006/CO2_Emissions_Across_Flights/blob/main/report/ANGELA_YEUNG_DATA1030_FINAL_REPORT.pdf" target="_blank">here</a>.</p>
        </div>
        <div className="col-md-6">
          <img src={results} alt="kaggle dataset" className="img-fluid" />
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
          <p> I learned the importance of data preprocessing and choosing the appropriate machine learning algorithms based on the data characteristics.  </p>
        </div>
        <div className="col-md-3 three-col-content text-star t">
          
          <p> One of the main insights, also intuitive, was the significance of flight duration and price on emissions. </p>
        </div>
        <div className="col-md-3 three-col-content text-start">
          <p> The analysis also showed tendencies of model variability in performance, which emphasized the need for strong model evaluation metrics. </p>
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
          <p className="section-content">This project demonstrates the potential of machine learning to analyze environmental challenges, which could lead to insights that influence policy and innovation in avaiation emission reduction. Similar tools like these can become the foundation for targeted interventions that could significantly mitigate this impact on the environment as global travel continues to grow. </p>
        </div>
      </div>

    </div>
  );
}

export default CS3;