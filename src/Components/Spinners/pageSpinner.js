import React from 'react';
import Loader from 'react-loader-spinner';

const pageSpinner = props => {
  return props.spinners && props.spinners.length
    ? <div className="page-spinner-wrapper">
      {
        props.spinners.map(spinner => {
          return spinner ? <div key={spinner} className="center page-loader">
            <Loader type="ThreeDots" color="#811b92" height={80} width={80} />
          </div> : null
        })
      }
    </div> : null;
}

export default pageSpinner;