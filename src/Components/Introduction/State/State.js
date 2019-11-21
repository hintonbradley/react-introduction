
import React from 'react';
import '../../../main.css';
import StateCode from '../../../img/stateCode.jpg';
import initializeState from '../../../img/initializeState.jpg';

class State extends React.Component {
    constructor (props) {
        super (props);

        // We initialize (set) state in the constructor
        this.state = {
            name: 'James'
        }

        // changing state after 5 seconds
        setTimeout(
            function() {
                this.setState({name: 'Bradley'});
            }
            .bind(this),
            5000
        );
    }

    render () {
        return (
            <div>
                <div className="component">
                    <h4>From Component: <u>State</u></h4>
                    <div className="result">
                        <p>Name (state using one way binding) is: <span className="hilight"> {this.state.name} </span></p>
                        <p className="text-tiny">(starts off as James and changes to Bradley after 5 seconds using setTimeout></p>
                    </div>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <p>We initialize state in the constructor. If state is to change anytime thereafter, the component will rerender with the updated state on the UI.</p>
                        <img src={StateCode} className="img-md" alt="test"/>
                    </div>
                    <div className="img-example">
                        <p>We can initialize state without a constructor simply because we have Babel to automatically initialize our variables inside the class's constsructor.</p>
                        <img src={initializeState} className="img-full" alt="test"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default State;