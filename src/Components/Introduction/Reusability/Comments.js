import React from 'react';
import CommentDetails from './CommentDetails';
import comments from '../../../img/comments.jpg';
import commentDetails from '../../../img/commentDetails.jpg';

const Comments = function() {
    return (
        <div>
            <div className="component">
                <h4>From Component: <u>Reusability (Comments)</u></h4>
                <div className="result mt-20">
                    <div className="ui container comments">
                        < CommentDetails />
                    </div>
                </div>
            </div>
            <div className="code-example">
                <div className="img-example">
                    <p><u>Comments component:</u> Nesting CommentDetails inside Comments components.</p>
                    <img src={comments} className="img-md" alt="test"/>
                </div>
                <div className="img-example">
                    <p><u>CommentDetails component:</u> Looping through data for Reusibility and Configuring each comment that is created.</p>
                    <img src={commentDetails} className="img-full" alt="test"/>
                </div>
            </div>
        </div>
    )
}

export default Comments;