
import React from 'react';
import '../../main.css';
import CompDidMount from '../../img/compDidMount.jpg';


// ...

class RenderIf extends React.Component {
    // Removed geolocation code from constructor
    constructor (props) {
        super (props);

        this.state = {
            lat: null,
            errorMessage: null
        }
    }

    componentDidMount () {
        // Removed this code block from constructor and added it to comopnentDidMount method - still works as expected. 
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude})
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        )
    }

// ...

    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    <div className="component">
                        <h4>Method: <u>componentDidMount</u></h4>
                        <div className="result">
                            <p>Error: <span className="hilight"> {this.state.errorMessage} </span></p>
                        </div>
                    </div>
                    <div className="code-example">
                        <div className="img-example">
                            <h4>This method is used to:</h4>
                            <ul>
                                <li>Process initial data loading</li>
                                <li>Kick off one-time outside process</li>
                            </ul>
                            <p className="mt-20">We moved the geolocation code to the componentDidMount method because this method is used to do the processes listed above. Data-loading code should be centralized in this method and NOT in the constructor.</p>
                            <img src={CompDidMount} className="img-md" alt="test"/>
                        </div>
                    </div>
                </div>
            )
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <div className="component">
                        <h4>Method: <u>componentDidMount</u></h4>
                        <div className="result">
                            <p>Lattitude: <span className="hilight"> {this.state.lat} </span></p>
                        </div>
                    </div>
                    <div className="code-example">
                        <div className="img-example">
                            <h4>This method is used to:</h4>
                            <ul>
                                <li>Process initial data loading</li>
                                <li>Kick off one-time outside process</li>
                            </ul>
                            <p className="mt-20">We moved the geolocation code to the componentDidMount method because this method is used to do the processes listed above. Data-loading code should be centralized in this method and NOT in the constructor.</p>
                            <img src={CompDidMount} className="img-md" alt="test"/>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="component">
                    <h4>Method: <u>componentDidMount</u></h4>
                    <div className="result">
                        <p>Loading...</p>
                    </div>
                </div>
                <div className="code-example">
                        <div className="img-example">
                            <h4>This method is used to:</h4>
                            <ul>
                                <li>Process initial data loading</li>
                                <li>Kick off one-time outside process</li>
                            </ul>
                            <p className="mt-20">We moved the geolocation code to the componentDidMount method because this method is used to do the processes listed above. Data-loading code should be centralized in this method and NOT in the constructor.</p>
                            <img src={CompDidMount} className="img-md" alt="test"/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RenderIf;