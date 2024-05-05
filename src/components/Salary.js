import React from "react";
import right from "../assets/right.png";

const Salary = ({ minSalary, maxSalary, currency }) => {
  return (
    <div className="card-container__salary">
      Estimated Salary: {currency} {minSalary ? minSalary : ""}{" "}
      {minSalary ? "-" : ""} {maxSalary ? maxSalary : ""}
      <span>
        <img src={right} alt="right-icon" width={20} height={20} />
      </span>
    </div>
  );
};

export default Salary;
