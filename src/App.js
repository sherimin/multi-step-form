// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./components/Sidebar";
import Form from "./components/Forms/Form";
import { useState } from "react";
import MobileSidebar from "./components/MobileSidebar";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="body">
      <main className="relative flex h-4/5 bg-neutral-white p-[20px] rounded-2xl justify-center items-center border-2 border-rose-500 w-11/12 md:w-auto z-40">
        <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />
        <MobileSidebar activeStep={activeStep} setActiveStep={setActiveStep} />
        <Form activeStep={activeStep} setActiveStep={setActiveStep} />
      </main>
    </div>
  );
}

export default App;
