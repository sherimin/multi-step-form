import React from "react";
import StepNavigation from "./Forms/StepNavigation";

const MobileSidebar = ({ activeStep, setActiveStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="md:hidden relative">
      <div className="flex fixed top-0 left-0 right-0 bg-no-repeat bg-contain bg-top justify-center">
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

      {activeStep !== 5 && (
        <div className="flex fixed bottom-0 w-full bg-neutral-white h-14 justify-between items-center left-0 right-0 p-5">
          {activeStep === 1 ? (
            <div></div>
          ) : (
            <StepNavigation
              label="Go Back"
              onClick={() => setActiveStep(activeStep - 1)}
            />
          )}

          {activeStep === 4 ? (
            <StepNavigation
              label="Confirm"
              onClick={() => setActiveStep(activeStep + 1)}
            />
          ) : (
            <StepNavigation
              label="Next Step"
              onClick={() => setActiveStep(activeStep + 1)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
