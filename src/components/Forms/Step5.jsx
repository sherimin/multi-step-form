import React from "react";
import thankyouImg from "../../assets/images/icon-thank-you.svg";
import { motion } from "framer-motion";

const Step5 = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="flex flex-col h-full justify-center items-center gap-5"
    >
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
    </motion.div>
  );
};

export default Step5;
