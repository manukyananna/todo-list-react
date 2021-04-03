import React from "react";

const textarea = props => {
  return <div className="form-group">
    <label htmlFor={props.id}>{props.labelValue}</label>
    <textarea
      id={props.id}
      rows={props.rows}
      placeholder="Type..."
      value={props.value}
      className={`form-control form-input ${props.fail ? "input-error" : ""}`}
      onChange={props.changed}
    ></textarea>
  </div>
}

export default textarea;