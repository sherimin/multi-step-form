import React from "react";
import mobileBg from "../assets/images/bg-sidebar-mobile.svg";

const MobileSidebar = ({ activeStep, setActiveStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="md:hidden relative">
      <div
        className="flex fixed top-0 left-0 right-0 bg-no-repeat bg-contain bg-top justify-center z-0"
        style={{
          backgroundImage: `url(${mobileBg})`,
          paddingBottom: "40%",
        }}
      >
        {steps.map((step) => {
          const isActive = step === activeStep;
          return (
            <button
              key={step}
              className={`flex border-2 rounded-full mr-5 w-12 h-12 mt-4 justify-center items-center font-bold  ${isActive ? "bg-primary-blue-200 text-primary-blue-950 border-primary-blue-200" : "bg-transparent text-neutral-white border-neutral-white"}`}
              onClick={() => setActiveStep(step)}
            >
              {step}
            </button>
          );
        })}
      </div>

      <div className="flex fixed bottom-0 w-full bg-neutral-white h-14 justify-between items-center border-2 border-yellow-300 left-0 right-0">
        <div
          className="cursor-pointer"
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Go Back
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Next Step
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
