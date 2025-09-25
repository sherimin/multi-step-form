import React from "react";
import TextInput from "../Input/TextInput";

const textInputLabels = ["Name", "Email Address", "Phone Number"];

const Step1 = ({ register, errors }) => {
  return (
    <div className="flex flex-col h-full w-full justify-start items-start mt-10 gap-5">
      {textInputLabels.map((label) => (
        <TextInput key={label} name="name" register={register} label={label} errors={errors} rules={{ required: 'Name cannot leave blank.'}} />
      ))}
    </div>
  );
};

export default Step1;
