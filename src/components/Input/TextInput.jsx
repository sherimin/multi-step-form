import React from "react";

const TextInput = ({ label, placeholder, register, error, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between mb-2 text-md">
        <div className="flex text-primary-blue-950">{label}</div>
        {error && (
          <p className="text-red-500 font-bold">{error.message}</p>
        )}
      </div>

      <input
        className={`flex w-full border-[1px]  rounded-md outline-primary-purple-600 p-2 ${
          error ? "border-primary-red-500" : "border-neutral-grey-500"
        }`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
