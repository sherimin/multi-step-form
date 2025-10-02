import React from "react";
import AddOnInput from "../Input/AddOnInput";

const Step3 = ({ setValue, watch }) => {
  const isMonthly = watch("isMonthly");

  const addOnItems = [
    {
      name: "Online Service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full mt-10 justify-start gap-6">
      {addOnItems.map((item) => {
        const itemPrice = isMonthly ? item.monthlyPrice : item.yearlyPrice;
        
        return (
          <AddOnInput
            key={item.name}
            name={item.name}
            description={item.description}
            price={
              isMonthly
                ? `${item.monthlyPrice}/mo`
                : `${item.yearlyPrice}/yr`
            }
            isSelected={watch("addOns")?.some(
              (selectedItem) => selectedItem.name === item.name,
            )}
            onClick={() => {
              const currentAddOns = watch("addOns") || [];
              const exist = currentAddOns.some(
                (selectedItem) => selectedItem.name === item.name,
              );

              if (exist) {
                // if this item is already selected, them remove it.
                setValue(
                  "addOns",
                  currentAddOns.filter(
                    (selectedItem) => selectedItem.name !== item.name,
                  ),
                  { shouldValidate: true },
                );
              } else {
                setValue(
                  "addOns",
                  [...currentAddOns, { name: item.name, price: itemPrice }],
                  { shouldValidate: true },
                );
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Step3;
