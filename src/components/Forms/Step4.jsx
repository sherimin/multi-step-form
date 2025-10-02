import React from "react";

const Step4 = ({ getValues, setActiveStep }) => {
  const formData = getValues();
  const { name, plan, isMonthly, addOns } = formData;

  const addOnsCost = addOns.reduce((sum, addOn) => sum + addOn.price, 0);

  const totalCost = plan.price + addOnsCost;

  return (
    <div className="flex flex-col w-full h-full justify-start">
      <div className="flex flex-col w-full p-5 bg-neutral-blue-100 rounded-lg gap-5 ">
        <div className="flex justify-center">
          <div className="text-primary-purple-600 font-bold text-lg">{name}'s Bill Summary</div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <div className="flex font-bold text-primary-blue-950 mb-1">{plan.name}</div>
            <div className="flex text-neutral-grey-500 underline cursor-pointer" onClick={() => setActiveStep(2)}>Change</div>
          </div>
          
          <div className="flex font-bold text-primary-blue-950">${plan.price}{isMonthly ? '/mo'  : '/yr'}</div>
        </div>

        {addOns.length > 0 && (
          addOns.map((addOn) => {
            return (
              <div key={addOn.name}  className="flex flex-col w-full gap-2">
                <div className="flex w-full justify-between">
                  <div className="flex text-neutral-grey-500">{addOn.name}</div>
                  <div className="flex text-neutral-grey-500">+${addOn.price}{isMonthly ? '/mo'  : '/yr'}</div>
                </div>
              </div>
            )
          })
        )}
      </div>

      <div className="flex justify-between w-full p-5">
        <div className="flex text-neutral-grey-500">Total {isMonthly ? 'per month'  : 'per year'} </div>
        <div className="flex text-primary-purple-600 font-bold text-xlx">{totalCost}{isMonthly ? '/mo'  : '/yr'}</div>
      </div>
    </div>
  )
};

export default Step4;
