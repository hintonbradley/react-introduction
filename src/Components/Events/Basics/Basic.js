import React from 'react';
import '../../../main.css';
import './Basic.css';
import BasicEventImg from '../../../img/BasicEventImg.jpg';

class BasicEventHandler extends React.Component {
    
    // Adding a method to be called when button is clicked with one parameter (the event)
    onButtonClick (event) {
        console.log('button has been clicked')
    }

    render () {
        return (
            <div>
                <div className="component">
                    <h4>From Component: <u>Basic Event Handler</u></h4>
                    {/* Adding specific prop (onClick) to the button to trigger method when button is clicked. */}
                    <button className="m-ctr" onClick={this.onButtonClick} >Click me!</button>
                    <div className="result">
                        <p>Open console to view</p>
                    </div>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <img src={BasicEventImg} className="img-lg" alt="test"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicEventHandler;