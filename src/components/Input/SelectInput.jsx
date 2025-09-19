import React from "react";

const SelectInput = ({ avatar, title, price, isMonthly }) => {
  return (
    <div className="flex flex-col border-[1px] border-neutral-grey-500 rounded-md w-1/3 p-3 justify-between items-start cursor-pointer">
      <img src={avatar} alt={avatar} className="flex h-12 w-12" />

      <div className="flex flex-col">
        <div className="flex text-primary-blue-950 font-bold">{title}</div>
        <div className="flex text-neutral-grey-500">{price}</div>
      </div>

      {!isMonthly && <div>2 monthly free</div>}
    </div>
  );
};

export default SelectInput;
