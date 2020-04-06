import React from 'react';
import "./sum-widget.css";

export const SumWidget = ({
  title = 'Sum Widget',
  count = 0,
  addNumber = () => null,
  removeNumber = () => null,
}) => {
  return (
    <div className="sum-widget">
      <h3 className="title">{title}</h3>
      <div className="buttons">
        <button onClick={() => addNumber()}>+</button>
        <span className="count"> {count} </span>
        <button onClick={() => removeNumber()}>-</button>
      </div>
    </div>
  );
};
