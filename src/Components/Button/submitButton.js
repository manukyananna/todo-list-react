import React from 'react';
import { useSelector } from 'react-redux';
import ButtonSpinner from '../Spinners/buttonSpinner';

const SubmitButton = React.memo(props => {
  const buttonSpinners = useSelector(state => state.spinner.buttonSpinners);
  const currentSpinner = buttonSpinners.find(spinner => spinner === props.spinnerId);
  return <button type="submit" disabled={currentSpinner} className={`${props.className ? props.className : ''} btn-default`} onClick={props.clicked}>
    {props.name}
    { currentSpinner ? <ButtonSpinner spinner={currentSpinner} /> : null }
  </button>;
});

export default SubmitButton;