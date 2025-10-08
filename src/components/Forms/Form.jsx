import React from "react";
import { useForm } from "react-hook-form";
import Title from "./Title";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepNavigation from "./StepNavigation";
import Step5 from "./Step5";

const Form = ({ activeStep, setActiveStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    trigger,
    watch,
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
    if (activeStep === 2) fieldsToValidate = ["plan"];

    //Form Input Validation
    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      handleSubmit(handleNext)();
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <div className="flex flex-col border-2 border-blue-400 h-full py-5 justify-between px-0 sm:px-6 md:px-10 lg:px-14 xl:px-28 w-full md:w-[50vw] z-30">
        {activeStep === 5 ? (
          <Step5 />
        ) : (
          <>
            <Title activeStep={activeStep} />

            {activeStep === 1 && <Step1 register={register} errors={errors} />}
            {activeStep === 2 && (
              <Step2 setValue={setValue} trigger={trigger} watch={watch} />
            )}
            {activeStep === 3 && <Step3 setValue={setValue} watch={watch} />}
            {activeStep === 4 && (
              <Step4 getValues={getValues} setActiveStep={setActiveStep} />
            )}

            <div className="hidden md:flex flex-row w-full justify-between mt-5  bottom-0 bg-transparent">
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
