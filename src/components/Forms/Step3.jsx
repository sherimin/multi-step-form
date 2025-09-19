import React from "react";
import AddOnInput from "../Input/AddOnInput";

const Step3 = ({ isMonthly }) => {
    const addOnItems = [
        {
            name: 'Online Service',
            description: 'Access to multiplayer games',
            monthlyPrice: 1,
            yearlyPrice: 10,
        },
        {
            name: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            monthlyPrice: 2,
            yearlyPrice: 20,
        },
        {
            name: 'Customizable Profile',
            description: 'Custom theme on your profile',
            monthlyPrice: 2,
            yearlyPrice: 20,
        },
    ]


  return (<div className="flex flex-col h-full w-full bg-purple-100 mt-10 justify-start gap-8">
    {addOnItems.map((item) => (<AddOnInput
      key={item.name}
      name={item.name}
      description={item.description}
      price={isMonthly ? item.monthlyPrice + '/mo' : item.yearlyPrice + '/yr'}
     />))}
  </div>);
};

export default Step3;
