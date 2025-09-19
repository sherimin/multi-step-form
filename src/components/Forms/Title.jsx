import React from "react";

const titleContent = [
  {
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    description: "Double check everything looks OK before confirming.",
  },
];

const Title = ({ activeStep }) => {
  return (
    <div className="flex flex-col">
      <div className="text-primary-blue-950 font-extrabold text-3xl">
        {titleContent[activeStep - 1].title}
      </div>
      <div className="text-neutral-grey-500 text-lg mt-2">
        {titleContent[activeStep - 1].description}
      </div>
    </div>
  );
};

export default Title;
