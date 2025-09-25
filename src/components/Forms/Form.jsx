import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Title from "./Title";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepNavigation from "./StepNavigation";
import Step5 from "./Step5";

const Form = ({ activeStep, setActiveStep }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      plan: "",
      isMonthly: true,
      addOns: [],
    },
  });

  const handleValidation = async () => {
    let fieldsToValidate = [];

    if (activeStep === 1) fieldsToValidate = ["name", "email", "phone"];

    //Form Input Validation
    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      handleSubmit(handleNext)();
    }
  };

  const handleNext = (data) => {
    console.log("data from handleNext: ", data);

    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <div className="flex flex-col border-2 border-blue-400 h-full w-[50vw] px-28 py-5 justify-between">
        {activeStep === 5 ? (
          <Step5 />
        ) : (
          <>
            <Title activeStep={activeStep} />

            {activeStep === 1 && <Step1 register={register} errors={errors} />}
            {activeStep === 2 && <Step2 isMonthly={isMonthly} />}
            {activeStep === 3 && <Step3 isMonthly={isMonthly} />}
            {activeStep === 4 && (
              <Step4 isMonthly={isMonthly} getValues={getValues} />
            )}

            <div className="flex flex-row justify-between mt-5">
              {activeStep === 1 ? (
                <div></div>
              ) : (
                <StepNavigation
                  label="Go Back"
                  activeStep={activeStep}
                  onClick={() => setActiveStep(activeStep - 1)} // Go backword without form validation
                />
              )}

              {activeStep === 4 ? (
                <StepNavigation label="Confirm" onClick={handleValidation} />
              ) : (
                <StepNavigation label="Next Step" onClick={handleValidation} />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
