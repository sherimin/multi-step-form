import React from "react";

const TextInput = ({ label, name, register, errors, rules }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex font-bold text-primary-blue-950 mb-2">{label}</div>
      <input className="flex w-full border-[1px] border-neutral-grey-500 rounded-md outline-primary-purple-600 p-2" />

      {errors[name] && (
        <p className="text-primary-red-500 text-sm mt-1">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default TextInput;
