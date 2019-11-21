import React from 'react';
import './ArrowFunction.css';
import EventArrowFunction from '../../../../img/EventArrowFunction.jpg';

class BasicEventHandler extends React.Component {

    state = {
        strsEqual: false
    }
    
    // Adding a method to be called when button is clicked with parameter (value) being passed directly from JSX.
    compareInput (str) {
        if (str==='hello world!') {
            this.setState({strsEqual: true})
        } else {
            this.setState({strsEqual: false})
        }
    }

    render () {
        return (
            <div>
                <div className="component">
                    <h4>From Component: <u>Basic Event Handler</u></h4>
                    {/* Using arrow functions for event */}
                    <input className="m-ctr" onChange={(event) => this.compareInput(event.target.value)}></input>
                    <div className="result">
                        <p className={this.state.strsEqual ? 'green':'red'}>String equal to 'hello world!'?</p>
                    </div>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <img src={EventArrowFunction} className="img-lg" alt="test"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicEventHandler;