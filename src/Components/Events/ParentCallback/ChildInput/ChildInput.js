
import React from 'react';

class ChildInput extends React.Component {

    state = { keyword: '' }

    formSubmit = (e) => {
        e.preventDefault();
        // Inside this method, we add a reference to the method from the parent component, passing the keyword back up the chain.
        this.props.onSubmit(this.state.keyword)
    }

    keywordChange = (e) => {
        this.setState({keyword: e.target.value})
    }

    render() {
        return (
            <div>
                <h4>From Component: <u>ChildInput</u></h4>
                {/* When form is submitted, we call formSubmit function in this class. */}
                <form onSubmit={this.formSubmit}>
                    {/* Updating keyword on each keystroke */}
                    <input onChange={this.keywordChange} placeholder="Enter keyword" value={this.state.keyword}></input>
                </form>
            </div>
        )
    }
}

export default ChildInput;

