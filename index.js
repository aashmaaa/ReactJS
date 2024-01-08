import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

import react from "react";
import ReactDOM from "react-dom/client";

function App() {
  const x = "jonas";
  return <h1>Hello react!!</h1>;
}

const root = RootDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <h1>Hello React!!</h1>
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div>
      <img src="pizza.jpg" alt="pizza" />
      <h2>Pizza</h2>
      <p>Tomato, Mozzerella,spinach. and ricotta cheeses</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
