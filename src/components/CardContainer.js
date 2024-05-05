import React from "react";
import clock from "../assets/clock.jpeg";
import EasyApplyButton from "./EasyApplyButton";
import Salary from "./Salary";
import CompanyInfo from "./CompanyInfo";
import About from "./About";
import ReferralButton from "./ReferralButton";

const CardContainer = ({ job }) => {
  return (
    <div className="card-container">
      <div className="card-container__posted">
        <div>
          <img src={clock} alt="clock" width={15} height={15} />
        </div>
        <p>Posted 11 days ago</p>
      </div>
      <CompanyInfo
        location={job.location}
        companyName={job.companyName}
        jobRole={job.jobRole}
        logoUrl={job.logoUrl}
      />
      <Salary
        minSalary={job.minJdSalary}
        maxSalary={job.maxJdSalary}
        currency={job.salaryCurrencyCode}
      />
      <About jobDetailsFromCompany={job.jobDetailsFromCompany} />
      <div className="card-container__exp">
        <h3>Minimum experience</h3>
        <p>{job.minExp ? job.minExp : "0"} years</p>
      </div>
      {/* Buttons container */}
      <div className="card-container__btn-container">
        <EasyApplyButton />
        <ReferralButton />
      </div>
    </div>
  );
};

export default CardContainer;
