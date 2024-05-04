import React from "react";
import ref1 from "../assets/referral-pic-1.jpeg";
import ref2 from "../assets/referral-pic-2.jpeg";

const ReferralButton = () => {
  return (
    <button className="referral-btn">
      <div className="referral-btn__img_cont">
        <span className="referral-btn__img">
          <img src={ref1} width={25} height={25} alt="thunder-icon" />
        </span>
        <span className="referral-btn__img">
          <img src={ref2} width={25} height={25} onBlur alt="thunder-icon" />
        </span>
      </div>{" "}
      Unlock Referral Asks
    </button>
  );
};

export default ReferralButton;
