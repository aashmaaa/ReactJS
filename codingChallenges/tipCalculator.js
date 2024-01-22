import { Children, useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output bill={bill} />
      <Reset />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="1">It was awful(0%) </option>
        <option value="1">It was good(10%) </option>
        <option value="1">It was awesome(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill }) {
  return (
    <div>
      <h3>You pay X (${bill} + $b tip)</h3>
    </div>
  );
}

function Reset() {
  return (
    <div>
      <button onClick={""}>reset</button>
    </div>
  );
}
