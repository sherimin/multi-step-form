import React from "react";
import thankyouImg from "../../assets/images/icon-thank-you.svg";

const Step5 = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-5">
      <div className="flex">
        <img src={thankyouImg} alt="thank-you-img" className="flex" />
      </div>

      <div className="text-primary-blue-950 font-extrabold text-3xl">
        Thank you!
      </div>

      <p className="text-neutral-grey-500 text-lg mt-2 text-center">
        Thank you for confirming your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step5;
