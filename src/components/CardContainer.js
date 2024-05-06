import React from "react";
import clock from "../assets/clock.jpeg";
import EasyApplyButton from "./EasyApplyButton";
import Salary from "./Salary";
import CompanyInfo from "./CompanyInfo";
import About from "./About";
import ReferralButton from "./ReferralButton";

const CardContainer = ({ job }) => {
  const posted = Math.floor(Math.random() * 31);
  return (
    <div className="card-container">
      {/* posted */}
      <div className="card-container__posted">
        <div>
          <img src={clock} alt="clock" width={15} height={15} />
        </div>
        <p>Posted {posted} days ago</p>
      </div>
      {/* name,location and role */}
      <CompanyInfo
        location={job.location}
        companyName={job.companyName}
        jobRole={job.jobRole}
        logoUrl={job.logoUrl}
      />
      {/* expected salary range */}
      <Salary
        minSalary={job.minJdSalary}
        maxSalary={job.maxJdSalary}
        currency={job.salaryCurrencyCode}
      />
      {/* description */}
      <About jobDetailsFromCompany={job.jobDetailsFromCompany} />
      {/* min experience */}
      <div className="card-container__exp">
        <h3>Minimum experience</h3>
        <p>{job.minExp ? job.minExp : "0"} years</p>
      </div>
      {/* Buttons container */}
      <div className="card-container__btn-container">
        <EasyApplyButton applyLink={job.jdLink} />
        <ReferralButton />
      </div>
    </div>
  );
};

export default CardContainer;
