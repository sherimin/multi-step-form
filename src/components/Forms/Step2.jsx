import React, { useEffect } from "react";
import SelectInput from "../Input/SelectInput";
import arcadeAvatar from "../../assets/images/icon-arcade.svg";
import advancedAvatar from "../../assets/images/icon-advanced.svg";
import proAvatar from "../../assets/images/icon-pro.svg";
import { motion } from "framer-motion";

const step2Selections = [
  {
    key: 1,
    avatar: arcadeAvatar,
    title: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    key: 2,
    avatar: advancedAvatar,
    title: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    key: 3,
    avatar: proAvatar,
    title: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

const Step2 = ({ setValue, trigger, watch, errors, register }) => {
  register("plan", { required: "Please select a plan." });
  const selectedPlan = watch("plan");
  const isMonthly = watch("isMonthly");

  //Update plan price when user re-chooses monthly or yearly plan
  useEffect(() => {
    if (selectedPlan?.name) {
      const planData = step2Selections.find(
        (plan) => plan.title === selectedPlan.name,
      );

      if (planData) {
        const newPrice = isMonthly
          ? planData.monthlyPrice
          : planData.yearlyPrice;

        setValue("plan", { name: selectedPlan.name, price: newPrice });
      }
    }
  }, [isMonthly, selectedPlan?.name, setValue]);

  return (
    <div className="flex flex-col h-full w-full justify-start items-center mt-10">
      <div className="flex flex-col w-full gap-4 md:flex-row h-full md:h-1/2 ">
        {step2Selections.map((plan) => {
          const planName = plan.title;
          const planPrice = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <SelectInput
              key={planName}
              avatar={plan.avatar}
              title={planName}
              price={
                isMonthly
                  ? `$${plan.monthlyPrice}/mo`
                  : `$${plan.yearlyPrice}/yr`
              }
              isMonthly={isMonthly}
              isSelected={selectedPlan?.name === planName}
              onClick={() => {
                setValue(
                  "plan",
                  { name: planName, price: planPrice },
                  { shouldValidate: true },
                );
                trigger("plan");
              }}
            />
          );
        })}
      </div>

      {/* Monthly / Yearly toggle button */}
      <div className="flex flex-row mt-10 bg-gray-100 w-full gap-5 justify-center pt-3 pb-3 rounded-lg">
        <div
          className={`font-bold  ${isMonthly ? "text-primary-blue-950" : "text-neutral-grey-500"}`}
        >
          Monthly
        </div>

        <div
          onClick={() =>
            setValue("isMonthly", !isMonthly, { shouldValidate: true })
          }
        >
          <div className="relative w-14 h-7 bg-primary-blue-950 rounded-full cursor-pointer">
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isMonthly ? "translate-x-0" : "translate-x-7"
              }`}
            />
          </div>
        </div>

        <div
          className={`font-bold  ${isMonthly ? "text-neutral-grey-500" : "text-primary-blue-950"}`}
        >
          Yearly
        </div>
      </div>

      {/* Error Display */}
      {errors.plan && (
        <motion.p
          className="absolute bottom-2 md:flex md:mt-4 md:relative text-sm text-primary-red-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          Please select one plan before proceeding.
        </motion.p>
      )}
    </div>
  );
};

export default Step2;
