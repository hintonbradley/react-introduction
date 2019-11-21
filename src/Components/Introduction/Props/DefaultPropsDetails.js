import React from 'react';
import '../../../main.css';

const DefaultPropsDetails = function(props) {
    return (
        <div className="component">
            <h4>From Component: <u>{props.component}</u></h4>
            <div className="result">
                <p><span className="hilight"> {props.message} </span></p>
            </div>
        </div>
    )
}

DefaultPropsDetails.defaultProps = {
    component: 'DefaultPropsDetails',
    message: 'A message from defaultProps in the DefaultPropsDetails component.'
}

export default DefaultPropsDetails;