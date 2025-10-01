import React from "react";

const SelectInput = ({
  avatar,
  title,
  price,
  isMonthly,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col border-2 ${isSelected ? "border-primary-purple-600 bg-neutral-blue-50" : "border-neutral-grey-500"}  rounded-md w-1/3 p-3 justify-between items-start cursor-pointer`}
      onClick={onClick}
    >
      <img src={avatar} alt={avatar} className="flex h-12 w-12" />

      <div className="flex flex-col">
        <div className="flex text-primary-blue-950 font-bold">{title}</div>
        <div className="flex text-neutral-grey-500">{price}</div>
        {!isMonthly && (
          <div className="flex text-primary-blue-950">2 months free</div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
