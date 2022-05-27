import React from "react";
import "./Element.css";

export default function Element({
  element,
  handleShow,
  num,
  numElem,
  rolledDice,
}) {
  return (
    <div
      title={element.name}
      onClick={num === numElem && rolledDice ? handleShow : () => {}}
      className={`element element-${num} ${element.category} ${
        num === numElem && rolledDice ? "elem-selected" : ""
      } ${num > numElem ? "elem-disabled" : ""}`}
    >
      {num === numElem && rolledDice ? (
        <p className="click-here">Click Here!</p>
      ) : (
        <>
          <div className="number">{element.number}</div>
          <div className="symbol">{element.symbol}</div>
          <div className="element-name">{element.name}</div>
        </>
      )}
    </div>
  );
}
