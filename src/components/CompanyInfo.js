import React from "react";

const CompanyInfo = ({ logoUrl, location, companyName, jobRole }) => {
  return (
    <div className="card-container__company-info-container">
      {/* logo */}
      <div className="card-container__company-info__logo__container">
        <img
          alt="LG"
          src={logoUrl}
          width={35}
          height={35}
          className="card-container__company-info__logo"
        />
      </div>
      {/* company info */}
      <div className="card-container__company-info">
        <h2>{companyName}</h2>
        <h1>{jobRole}</h1>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
