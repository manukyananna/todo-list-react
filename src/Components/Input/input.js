import React from "react";

const input = props => {
  return <div className="form-group">
    <label htmlFor={props.id}>{props.labelValue}</label>
    <input
      id={props.id}
      type={props.type}
      placeholder="Type..."
      value={props.value}
      className={`form-control ${props.isDefaultStyle ? "input-min-style" : "form-input"} ${props.fail ? "input-error" : ""}`}
      autoComplete="off"
      onChange={props.changed}
    />
  </div>;
}

export default input;