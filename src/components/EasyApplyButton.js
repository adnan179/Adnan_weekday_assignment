import React from "react";
import thunder from "../assets/thunder.png";

const EasyApplyButton = () => {
  return (
    <button className="easy-apply-btn">
      <div className="easy-apply-btn__img-cont">
        <span>
          <img src={thunder} width={20} height={20} alt="thunder-icon" />
        </span>
      </div>{" "}
      Easy Apply
    </button>
  );
};

export default EasyApplyButton;
