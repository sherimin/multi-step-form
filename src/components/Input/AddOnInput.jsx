import React from "react";

const AddOnInput = ({ name, description, price, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center border-2 cursor-pointer p-5 rounded-md ${isSelected ? "border-primary-purple-600 bg-neutral-blue-100" : "border-neutral-grey-500"}`}
      onClick={onClick}
    >
      <div>checkbox</div>

      <div>
        <div className="text-primary-blue-950 font-extrabold">{name}</div>
        <div className="text-neutral-grey-500">{description}</div>
      </div>

      <div className="text-primary-purple-600">+${price}</div>
    </div>
  );
};

export default AddOnInput;
