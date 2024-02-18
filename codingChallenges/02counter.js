import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function nextStep() {
    return setStep((s) => step + 1);
  }

  function nextCount() {
    return setCount((c) => count + step);
  }
  var date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <p>
          <button onClick={() => setStep((s) => s - 1)}>-</button>steps:{step}
          <button onClick={nextStep}>+</button>
        </p>
      </div>
      <p>
        <button onClick={() => setCount((c) => c - step)}>-</button>count:
        {count - 1}
        <button onClick={nextCount}>+</button>
      </p>
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
// setStep((s) => step + 1);
