
import React from 'react';
import './Refs.css';
import RefImg from '../../../img/RefImg.jpg';

class Refs extends React.Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    state = {
        color: 'red',
        class: 'select a color'
    }

    getClassName = () =>    {
        this.setState({class: this.divRef.current.classList[1]})
    }

    render () {
        return (
            <div className="Refs">
                <div className="component">
                    <h4>From Component: <u>Refs</u></h4>
                    <div className="result">
                        <p>Select a color to change the referenced div class name.</p>
                        <button className="colorred" onClick={(e) => this.setState({color: 'red'})}>Red</button>
                        <button className="colorgreen" onClick={(e) => this.setState({color: 'green'})}>Green</button>
                        <button className="colorviolet" onClick={(e) => this.setState({color: 'violet'})}>Violet</button>
                        <div ref={this.divRef} className={`box color${this.state.color}`}>
                            <p>Ref div</p>
                        </div>
                        <p>After selecting a color, </p>
                        <button onClick={this.getClassName} >Show class name</button>
                        <p> <span className="hilight"> {this.state.class} </span> </p>
                    </div>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <p>We create a reference to an element in the contructor (this.divRef) and then add the reference to that element in the JSX (ref={"{this.divRef}"}), so we can access that element whenever we need to using React.</p>
                        <img src={RefImg} className="img-full" alt="test"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Refs;