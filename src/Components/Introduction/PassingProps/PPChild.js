
import React from 'react';
import '../../../main.css';


const PPChild = function(props) {
    console.log(props)
    return (
        <div>
            <div className="component">
                <h4>From Component: <u>Child component</u></h4>
                <div className="result">
                    <p>Props being passed down from the Passing Props Parent component to this component is:</p>
                    <p><span className="hilight"> {props.name} </span></p>
                </div>
            </div>
        </div>
    )
}

export default PPChild;