import React from "react";

const TextInput = ({ label }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex font-bold text-primary-blue-950 mb-2">{label}</div>
      <input className="flex w-full border-[1px] border-neutral-grey-500 rounded-md outline-primary-purple-600 p-2" />
    </div>
  );
};

export default TextInput;
