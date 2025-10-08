import React from "react";

const AddOnInput = ({ name, description, price, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center border-2 cursor-pointer p-5 rounded-md ${isSelected ? "border-primary-purple-600 bg-neutral-blue-100" : "border-neutral-grey-500"}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <input
          id={`checkbox-${name}`}
          type="checkbox"
          value=""
          readOnly
          checked={isSelected}
          className={`w-5 h-5 text-blue-600 bg-neutral-white cursor-pointer border-neutral-grey-500 rounded-md focus:bg-primary-purple-600 focus:ring-2 checked:bg-primary-purple-600 checked:border-primary-purple-600`}
        />
      </div>

      <div>
        <div className="text-primary-blue-950 font-extrabold">{name}</div>
        <div className="text-neutral-grey-500">{description}</div>
      </div>

      <div className="text-primary-purple-600">+${price}</div>
    </div>
  );
};

export default AddOnInput;
