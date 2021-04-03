import React from 'react';
import Loader from 'react-loader-spinner';

const buttonSpinner = props => {
  return props.spinner ? <div className="center ml-2 spinner">
    <Loader type="Oval" color="#811b92" height={25} width={25} />
  </div> : null;
}

export default buttonSpinner;