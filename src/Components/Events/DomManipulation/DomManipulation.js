
import React from 'react';
import './DomManipulation.css';
import DomManipulationImg from '../../../img/DomManipulationImg.jpg';

class DomManipulation extends React.Component {

    state = {
        active: false
    }

    render() {
        return (
            <div>
                <div className="component">
                    <h4 className={ this.state.active ? "txt-dark" : "txt-light" }>From Component: <u>DOM Manipulation</u></h4>
                    <div className="result">
                        <div>
                            {/* Adding class depending on if user clicked on div (set by state) */}
                            {/* Adding onClick listener to change state.active on each click. */}
                            <div className={ this.state.active ? "square switch-on" : "square switch-off" } onClick={() => this.setState({active: !this.state.active})}>
                                {this.state.active ? 'on' : 'off' }
                            </div>
                        </div>
                        {/* Adding classes depending on state.active */}
                        <div className={ this.state.active ? "bgd-light light-on" : "bgd-light light-off"}></div>
                    </div>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <img src={DomManipulationImg} className="img-lg" alt="test"/>
                    </div>
                </div>
            </div>
        )
    }
}



export default DomManipulation;






