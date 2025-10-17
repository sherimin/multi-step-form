import React, { useEffect } from "react";
import AddOnInput from "../Input/AddOnInput";

const Step3 = ({ setValue, watch }) => {
  const isMonthly = watch("isMonthly");
  const currentAddOns = watch("addOns") || [];

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

  //Update add-on price when user re-chooses monthly or yearly plan
  useEffect(() => {
    if (currentAddOns.length > 0) {
      const updateAddOns = currentAddOns.map((addOn) => {
        const item = addOnItems.find((i) => i.name === addOn.name);

        if (!item) return addOn;

        const newPrice = isMonthly ? item.monthlyPrice : item.yearlyPrice;

        return {
          ...addOn,
          price: newPrice,
        };
      });

      setValue("addOns", updateAddOns, { shouldValidate: true });
    }
  }, [isMonthly, setValue]);

  return (
    <div className="flex flex-col h-full w-full mt-10 justify-start gap-6">
      {addOnItems.map((item) => {
        const itemPrice = isMonthly ? item.monthlyPrice : item.yearlyPrice;
        // const currentAddOns = watch("addOns") || [];

        return (
          <AddOnInput
            key={item.name}
            name={item.name}
            description={item.description}
            price={
              isMonthly ? `${item.monthlyPrice}/mo` : `${item.yearlyPrice}/yr`
            }
            isSelected={currentAddOns.some(
              (selectedItem) => selectedItem.name === item.name,
            )}
            onClick={() => {
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
