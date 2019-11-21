import React from 'react';

const ApprovalCard = function(props) {
    console.log('props.children is: ', props.children.props.data)
    return (
        // <div className="component">
            <div className="component m-ctr">
                <div className="content">{props.children}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default ApprovalCard;

