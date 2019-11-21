import React from 'react';
import faker from 'faker';

const BasicComment = function(props) {
    console.log('props is: ', props.data)
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    {/* Grabbing fake avatar for each comment via Faker module. */}
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
                <div className="content">
                    {/* Using looped array to add data to JSX - use curly braces to tell React content can be found as variable. */}
                    <a href="/" className="author">
                        James
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 3:34pm</span>
                    </div>
                    <div className="text">Test comment for nesting.</div>
                </div>
            </div>
        </div>
    )
}

export default BasicComment;
