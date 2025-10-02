// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./components/Sidebar";
import Form from "./components/Forms/Form";
import { useState } from "react";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="body">
      <main className="flex h-4/5 bg-neutral-white p-[20px] rounded-2xl justify-center items-center">
        <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />
        <Form activeStep={activeStep} setActiveStep={setActiveStep} />
      </main>
    </div>
  );
}

export default App;
