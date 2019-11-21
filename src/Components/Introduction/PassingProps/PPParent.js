
import React from 'react';
import PPChild from './PPChild';
import PPParentImg from '../../../img/PPParent.jpg';
import PPChildImg from '../../../img/PPChild.jpg';

class PPParent extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            name: 'James'
        }
    }

    render () {
        return (
            <div>
                <div className="component">
                    <h4>From Component: <u>Passing props parent component</u></h4>
                    <div className="result">
                        < PPChild name={this.state.name}/>
                    </div>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <p>Passing props (via this.state...) down from the parent component to the child (nested) component.</p>
                        <img src={PPParentImg} className="img-md" alt="test"/>
                    </div>
                    <div className="img-example">
                        <p>Accessing props is similar - add a 'props' argument to the component and access it in the JSX.</p>
                        <img src={PPChildImg} className="img-lg" alt="test"/>
                    </div>
                </div>





                {/* <div className="card">
                    <h2>This is the Passing Props Parent component</h2>
                    < PPChild name={this.state.name}/>
                </div> */}
                {/* <div>
                    <img className="img-md mt-20 img-ctr" src={PPParentImg} alt="Inline styles" />
                    <img className="img-md mt-20 img-ctr" src={PPChildImg} alt="Inline styles" />
                </div> */}
            </div>
        )
    }
}

export default PPParent;