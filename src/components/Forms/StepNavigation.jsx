import React from "react";

const StepNavigation = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex font-semibold py-3 px-6 rounded-md ${label === "Confirm" ? "bg-primary-purple-600 text-neutral-white" : ""}`}
    >
      {label}
    </button>
  );
};

export default StepNavigation;
