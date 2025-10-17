import React from "react";

const StepNavigation = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex font-semibold text-sm md:text-lg py-2 px-4 md:py-3 md:px-6 border-2 border-transparent rounded-md 
        ${label === "Confirm" ? "bg-primary-purple-600 text-neutral-white hover:bg-neutral-white hover:border-primary-purple-600 hover:text-primary-purple-600" : ""} 
        ${label === "Next Step" ? "bg-primary-blue-950 text-neutral-white hover:bg-neutral-white hover:border-primary-blue-950 hover:text-primary-blue-950" : ""} 
        ${label === "Go Back" ? "bg-neutral-white text-neutral-grey-500  hover:border-neutral-grey-500" : ""}`}
    >
      {label}
    </button>
  );
};

export default StepNavigation;
