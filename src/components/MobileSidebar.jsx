import React from "react";

const MobileSidebar = ({ activeStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="md:hidden relative">
      <div className="flex fixed top-0 left-0 right-0 bg-no-repeat bg-contain bg-top justify-center">
        {steps.map((step) => {
          const isActive = step === activeStep;
          return (
            <div
              key={step}
              className={`flex border-2 rounded-full mr-5 w-12 h-12 mt-4 justify-center items-center font-bold  ${isActive ? "bg-primary-blue-200 text-primary-blue-950 border-primary-blue-200" : "bg-transparent text-neutral-white border-neutral-white"}`}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSidebar;
