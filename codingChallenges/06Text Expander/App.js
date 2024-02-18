import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        qwertyvuivokjhgfdfghjkl mnhbgfghyuj ikljmnbgvfdfg hjkmnbv ghjkl hgfsx
        cfghj nbvcd fghjkm nbvghyuj io;l,m jkoop;l, mkop ;l, klk,
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show Text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        qwertyvuivokjhgfdfghjkl mnhbgfghyuj ikljmnbgvfdfg hjkmnbv ghjkl hgfsx
        cfghj nbvcd fghjkm nbvghyuj io;l,m jkoop;l, mkop ;l, klk,
      </TextExpander>

      <TextExpander expanded={true} classname="box">
        qwertyvuivokjhgfdfghjkl mnhbgfghyuj ikljmnbgvfdfg hjkmnbv ghjkl hgfsx
        cfghj nbvcd fghjkm nbvghyuj io;l,m jkoop;l, mkop ;l, klk,
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cd",
  expanded = false,
  classname,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className="{classname}">
      <span>{children}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
