import React from "react";
import thunder from "../assets/thunder.png";

const EasyApplyButton = ({ applyLink }) => {
  return (
    <a className="easy-apply" href={applyLink}>
      <button className="easy-apply-btn">
        <div className="easy-apply-btn__img-cont">
          <span>
            <img src={thunder} width={20} height={20} alt="thunder-icon" />
          </span>
        </div>{" "}
        Easy Apply
      </button>
    </a>
  );
};

export default EasyApplyButton;
