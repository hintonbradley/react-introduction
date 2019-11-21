import React from 'react';
import JSXExpressImg from '../../../img/JSXExpressImg.jpg';
import './JSXExpressions.css';

const JSXExpressions = function() {
    
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December',]
    
    const month = months[new Date().getMonth()];
    
    let color = 'purple';
    
    return (
        <div>
            <div className="component">
                <h4>From Component: <u>JSX Expressions</u></h4>
                <div className="result">
                    <p><span className="hilight"> {false?'This is true':'False. Definitely false.'} </span></p>
                    <p>This month, it is: <span className="hilight"> {month} </span></p>
                    <p className={`${color}-text`}><span className="hilight"> The className attribute will determine this color. </span></p>
                </div>
            </div>
            <div className="code-example">
                <div className="img-example">
                    <img src={JSXExpressImg} className="img-md" alt="test"/>
                </div>
            </div>
        </div>
    )
}

export default JSXExpressions;