import React from "react";
import right from "../assets/right.png";

const Salary = () => {
  return (
    <div className="card-container__salary">
      Estimated Salary: 4LPA - 12LPA
      <span>
        <img src={right} alt="right-icon" width={20} height={20} />
      </span>
    </div>
  );
};

export default Salary;
