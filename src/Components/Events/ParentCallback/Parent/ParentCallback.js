
import React from 'react';
import ChildInput from '../ChildInput/ChildInput';
import ParentCallbackImg from '../../../../img/ParentCallbackImg.jpg';
import ChildInputImg from '../../../../img/ChildInputImg.jpg';

class ParentCallback extends React.Component {

    state = { keyword: ''}

    // Creating a method to be called every time the form in the child component is submitted.
    onKeywordSubmit = (term) => {
        console.log('From ParentCallback component - keyword is: ', term);
        this.setState({keyword: term})
    }

    render() {
        return (
            <div>
                <div className="component">
                    <h4>From Component: <u>ParentCallback</u></h4>
                    <div className="result">
                        <p><span className="hilight"> {this.state.keyword} </span></p>
                    </div>
                </div>
                {/* Passing the onKeywordSubmit method as a prop down to the child component to be able to receive the keyword on form submit. */}
                < ChildInput onSubmit={this.onKeywordSubmit} />
                <div className="code-example">
                    <div className="img-example">
                        <p>In the parent component, we create a method (onKeywordSubmit) to be used when the form in the child component is submitted. We also pass it down as a prop (onSubmit) to be used inthe child component onFormSubmit.</p>
                        <img src={ParentCallbackImg} className="img-md" alt="test"/>
                    </div>
                    <div className="img-example">
                        <p>We update the state (keyword) in this component on each keystroke (onChange & keywordChange) and once the user submits the form, we call a local method (formSubmit) which in turn calls the method that was passed down using props (this.props.onSubmit) from the parent component while passing the state as a argument.</p>
                        <img src={ChildInputImg} className="img-md" alt="test"/>
                    </div>
                </div>
            </div>
        )
    }
}



export default ParentCallback;






