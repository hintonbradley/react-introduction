
import React from 'react';
import RenderCode from '../../../img/renderIf.jpg';

class RenderIf extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            lat: null,
            errorMessage: null
        }

        // Requesting data from geolocation. If we get either a latitude or an error, the state will be updated, forcing the component to re-render, and thus changing what will be returned.
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude})
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        )
    }

    renderContent () {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    <div className="component">
                        <h4>From Component: <u>Render If</u></h4>
                        <div className="result">
                            <p>Error: <span className="hilight"> {this.state.errorMessage} </span></p>
                        </div>
                    </div>
                    <div className="code-example">
                        <div className="img-example">
                            <p>We initialize state in the constructor. If state is to change anytime thereafter, the component will rerender with the updated state on the UI.</p>
                            <img src={RenderCode} className="img-full" alt="test"/>
                        </div>
                    </div>
                </div>
            )
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <div className="component">
                        <h4>From Component: <u>Render If</u></h4>
                        <div className="result">
                            <p>Lattitude: <span className="hilight"> {this.state.lat} </span></p>
                        </div>
                    </div>
                    <div className="code-example">
                        <div className="img-example">
                            <p>We initialize state in the constructor. If state is to change anytime thereafter, the component will rerender with the updated state on the UI.</p>
                            <img src={RenderCode} className="img-full" alt="test"/>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="component">
                    <h4>From Component: <u>Render If</u></h4>
                    <div className="result">
                        <p><span className="hilight"> Loading... </span></p>
                    </div>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <p>We initialize state in the constructor. If state is to change anytime thereafter, the component will rerender with the updated state on the UI.</p>
                        <img src={RenderCode} className="img-full" alt="test"/>
                    </div>
                </div>
            </div>
        )
    }

    // Adding multiple options in the render method to show depending on what data is returned.
    render () {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default RenderIf;