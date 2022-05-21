import React from "react";
import "./Element.css";

export default function Element({ element, handleShow, num, numElem }) {
  return (
    <div
      title={element.name}
      onClick={num === numElem ? handleShow : () => {}}
      className={`element element-${num} ${element.category} ${
        num === numElem ? "elem-selected" : ""
      } ${num > numElem ? "elem-disabled" : ""}`}
    >
      {num !== numElem ? (
        <>
          <div className="number">{element.number}</div>
          <div className="symbol">{element.symbol}</div>
          <div className="element-name">{element.name}</div>
        </>
      ) : null}
      {num === numElem ? <p className="click-here">Click Here!</p> : null}
    </div>
  );
}
