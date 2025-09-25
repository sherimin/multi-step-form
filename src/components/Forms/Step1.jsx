import React from "react";
import TextInput from "../Input/TextInput";

const Step1 = ({ register, errors }) => {
  return (
    <div className="flex flex-col h-full w-full justify-start items-start mt-10 gap-5">
      <TextInput
        label="Name"
        placeholder="e.g. John Smith"
        error={errors.name}
        {...register("name", { required: "This field is required." })}
      />

      <TextInput
        label="Email Address"
        placeholder="e.g. jsmith@abc.com"
        error={errors.email}
        {...register("email", {
          required: "This field is required.",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid",
          },
        })}
      />

      <TextInput
        label="Phone Number"
        placeholder="e.g. 000-000-0000"
        error={errors.phone}
        {...register("phone", {
          required: "This field is required.",
          pattern: {
            value: /^[0-9]$/,
            message: "Phone number must contain only digits.",
          },
        })}
      />
    </div>
  );
};

export default Step1;
