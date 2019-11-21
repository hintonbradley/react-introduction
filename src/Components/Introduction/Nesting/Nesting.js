import React from 'react';
import ApprovalCard from './ApprovalCard';
import BasicComment from './BasicComment';
import nesting1 from '../../../img/nesting1.jpg';
import nesting2 from '../../../img/nesting2.jpg';
import nesting3 from '../../../img/nesting3.jpg';

const Nesting = function() {
    return (
        <div>
            <div className="component">
                <h4>From Component: <u>Approval Card & Basic Comment</u></h4>
                <div className="result">
                    < ApprovalCard >
                        < BasicComment data="hello world"/>
                    </ ApprovalCard >
                </div>
            </div>
            <div className="code-example">
                <div className="img-example">
                    <p>Creating an Approval Card component that the Comment component (see below) sits inside.</p>
                    <img src={nesting1} className="img-md" alt="test"/>
                </div>
                <div className="img-example">
                    <p>Creating a Comment component that will be wrapped inside of an Approval Card component (see above). Note: Since the BasicComment component is working as a property of the Approval Card component (see Nesting component), we must pass the props down through the ApprovalCard component and use it (as props.children) in our JSX where we want it to be displayed - in this case, we want it above our two buttons.</p>
                    <img src={nesting2} className="img-lg" alt="test"/>
                </div>
                <div className="img-example">
                    <p>Finally, after both components have been created, in a third component (Nesting) we wrap the BasicComment component inside of the ApprovalCard component. Note: If we open up the console, we can still see the props we passed down from the ApprovalCard (not props.children, but props.data).</p>
                    <img src={nesting3} className="img-sm" alt="test"/>
                </div>
            </div>
        </div>
    )
}

export default Nesting;