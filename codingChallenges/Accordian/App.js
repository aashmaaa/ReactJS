import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "What is this?",
    text: "qwer fdghjkhg SDFHJHGF dfghj fghjkmnb dftyuikj ikjuhgf mnbv 7ytgfc erfgh kjhgfcvbj fgghmnbgfdxcvbhjm cxdfrthyjm  ftyujm cxsdfghujiol,m xzasdfrtyujn vbnm.",
  },
  {
    title: "What is this?",
    text: "qwer fdghjkhg SDFHJHGF dfghj fghjkmnb dftyuikj ikjuhgf mnbv 7ytgfc erfgh kjhgfcvbj fgghmnbgfdxcvbhjm cxdfrthyjm  ftyujm cxsdfghujiol,m xzasdfrtyujn vbnm.",
  },
  {
    title: "What is this?",
    text: "qwer fdghjkhg SDFHJHGF dfghj fghjkmnb dftyuikj ikjuhgf mnbv 7ytgfc erfgh kjhgfcvbj fgghmnbgfdxcvbhjm cxdfrthyjm  ftyujm cxsdfghujiol,m xzasdfrtyujn vbnm.",
  },
  {
    title: "What is this?",
    text: "qwer fdghjkhg SDFHJHGF dfghj fghjkmnb dftyuikj ikjuhgf mnbv 7ytgfc erfgh kjhgfcvbj fgghmnbgfdxcvbhjm cxdfrthyjm  ftyujm cxsdfghujiol,m xzasdfrtyujn vbnm.",
  },
];

export default function App() {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  return (
    <div classname="accordian">
      {data.map((el, i) => (
        <AccordianItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordianItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
