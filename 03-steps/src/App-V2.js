import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>🤦✈️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
      </StepMessage>
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => step - 1);
    //setStep(step-1)
  }

  function handleNext() {
    if (step < 3) setStep((s) => step + 1);
    // setStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            <h3>Step {step} </h3> : {messages[step - 1]}
          </p>

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor={"#e7e7e7"}
              textColour={"#333"}
              onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
            >
              Learn how{" "}
            </Button>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColour="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>

            <Button
              bgColor="#7950f2"
              textColour="#fff"
              onClick={handleNext}
              text="Next"
            >
              Next <span>👉</span>
            </Button>

            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage(step, children) {
  return (
    <div>
      <p className="message">
        <h3>{step}</h3>
        {children}
      </p>
    </div>
  );
}

function Button({ textColour, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColour }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
