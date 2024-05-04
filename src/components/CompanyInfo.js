import React from "react";

const CompanyInfo = () => {
  return (
    <div className="card-container__company-info-container">
      {/* logo */}
      <div className="card-container__company-info__logo__container">
        <img
          alt="LG"
          src="https://logo.clearbit.com/lg.com"
          width={25}
          height={25}
          className="card-container__company-info__logo"
        />
      </div>
      {/* company info */}
      <div className="card-container__company-info">
        <h2>LG</h2>
        <h1>Senior Front-end Developer</h1>
        <p>Bangalore</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
