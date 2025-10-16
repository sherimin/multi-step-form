import "./App.css";
import Sidebar from "./components/Sidebar";
import Form from "./components/Forms/Form";
import { useState } from "react";
import MobileSidebar from "./components/MobileSidebar";
import mobileBg from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="body">
      <div
        className="flex fixed min-w-full top-0 left-0 right-0 bg-no-repeat bg-contain bg-top justify-center md:hidden"
        style={{
          backgroundImage: `url(${mobileBg})`,
          paddingBottom: "50%",
        }}
      ></div>

      <main className="relative flex h-4/5 bg-neutral-white p-[20px] rounded-2xl justify-center items-center w-11/12 md:w-auto z-40">
        <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />
        <MobileSidebar activeStep={activeStep} setActiveStep={setActiveStep} />
        <Form activeStep={activeStep} setActiveStep={setActiveStep} />
      </main>
    </div>
  );
}

export default App;
