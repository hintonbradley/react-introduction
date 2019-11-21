import React from 'react';

    const PropsDetails = function(props) {
        return (
            <div className="component">
                <h4>From Component: <u>PropertyDetails</u></h4>
                <div className="result">
                    <p>Properties being passed down from the Properties component:</p>
                    <p><span className="hilight"> {props.text} </span></p>
                    <p><span className="hilight"> {props.name} </span></p>
                    <p><span className="hilight"> {props.team} </span></p>
                </div>
            </div>
        )
    }

    export default PropsDetails;



    