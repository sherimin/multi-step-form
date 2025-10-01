import React from "react";

const Step4 = ({ getValues }) => {
  const formData = getValues();
  const { name, plan, isMonthly, addOns } = formData;

  return (
    <div className="flex flex-col w-full h-full justify-start">
      <div className="flex flex-col w-full p-5 bg-neutral-blue-100 rounded-lg justify-evenly">
        <div className="flex w-full border-2 border-slate-600 justify-between items-center">
          <div className="flex flex-col">
            <div className="flex font-bold text-primary-blue-950 mb-1">Arcade(Yearly)</div>
            <div className="flex text-neutral-grey-500 underline cursor-pointer">Change</div>
          </div>
          
          <div className="flex font-bold text-primary-blue-950">$90/yr</div>
        </div>

        <div className="flex flex-col w-full border-2 border-pink-600">
          <div className="flex w-full justify-between">
            <div className="flex text-neutral-grey-500">Online service</div>
            <div className="flex text-neutral-grey-500">+$10/yr</div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex">Larger Storagge</div>
            <div>+$20/yr</div>
          </div>
            
        </div>
      </div>

      <div className="flex justify-between w-full p-5">
        <div className="flex text-neutral-grey-500">Total (per year) </div>
        <div className="flex text-primary-purple-600 font-bold text-lg">$120/yr</div>
      </div>
    </div>
  )
};

export default Step4;
