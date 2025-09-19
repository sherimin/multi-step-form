import React from "react";
import TextInput from "../Input/TextInput";

const textInputLabels = ["Name", "Email Address", "Phone Number"];

const Step1 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-start items-start mt-10 gap-5">
      {textInputLabels.map((label) => (
        <TextInput key={label} label={label} />
      ))}
    </div>
  );
};

export default Step1;
