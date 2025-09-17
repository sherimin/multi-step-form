// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Form from './components/Forms/Form';
import { useState } from 'react';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="body">
      <main>
        <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />
        <Form />
      </main>
    </div>
  );
}

export default App;
