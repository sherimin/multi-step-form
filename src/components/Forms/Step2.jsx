import React from "react";
import SelectInput from "../Input/SelectInput";
import arcadeAvatar from "../../assets/images/icon-arcade.svg";
import advancedAvatar from "../../assets/images/icon-advanced.svg";
import proAvatar from "../../assets/images/icon-pro.svg";

const step2Selections = [
  {
    key: 1,
    avatar: arcadeAvatar,
    title: "Arcade",
    monthlyPrice: "$9/mo",
    yearlyPrice: "$90/yr",
  },
  {
    key: 2,
    avatar: advancedAvatar,
    title: "Advanced",
    monthlyPrice: "$12/mo",
    yearlyPrice: "$120/yr",
  },
  {
    key: 3,
    avatar: proAvatar,
    title: "Pro",
    monthlyPrice: "$15/mo",
    yearlyPrice: "$150/yr",
  },
];

const Step2 = ({ setValue, trigger, watch }) => {
  const selectedPlan = watch("plan");
  const isMonthly = watch("isMonthly");

  return (
    <div className="flex flex-col h-full w-full justify-start items-center mt-10">
      <div className="flex w-full h-1/2 gap-4">
        <SelectInput
          avatar={arcadeAvatar}
          title="Arcade"
          price={isMonthly ? "$9/mo" : "$90/yr"}
          isMonthly={isMonthly}
          isSelected={selectedPlan === "Arcade"}
          onClick={() => {
            setValue("plan", "Arcade", { shouldValidate: true });
            trigger("plan");
          }}
        />

        <SelectInput
          avatar={advancedAvatar}
          title="Advanced"
          price={isMonthly ? "$12/mo" : "$120/yr"}
          isMonthly={isMonthly}
          isSelected={selectedPlan === "Advanced"}
          onClick={() => {
            setValue("plan", "Advanced", { shouldValidate: true });
            trigger("plan");
          }}
        />

        <SelectInput
          avatar={proAvatar}
          title="Pro"
          price={isMonthly ? "$15/mo" : "$150/yr"}
          isMonthly={isMonthly}
          isSelected={selectedPlan === "Pro"}
          onClick={() => {
            setValue("plan", "Pro", { shouldValidate: true });
            trigger("plan");
          }}
        />
      </div>

      <div className="flex flex-row mt-10 bg-gray-100 w-full gap-5 justify-center pt-3 pb-3">
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
    </div>
  );
};

export default Step2;
