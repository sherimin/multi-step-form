import React from "react";
import SideButton from "./SideButton";

const Sidebar = ({ activeStep }) => {
  const steps = [
    { id: 1, title: "step 1", subtitle: "your info" },
    { id: 2, title: "step 2", subtitle: "select plan" },
    { id: 3, title: "step 3", subtitle: "add-ons" },
    { id: 4, title: "step 4", subtitle: "summary" },
  ];

  return (
    <div className="hidden flex-col h-full w-72 md:flex sidebar-bg">
      {steps.map((step) => {
        return (
          <SideButton
            key={step.id}
            id={step.id}
            title={step.title}
            subtitle={step.subtitle}
            isActive={step.id === activeStep}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
