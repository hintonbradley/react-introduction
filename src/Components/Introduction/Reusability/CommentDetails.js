import React from 'react';
import faker from 'faker';

// Creating data to be used in each comment that we add to the page.
let names = [
    {name:'James',comment:'Cool!',date:'May 15, 2019 at 2:30pm'},
    {name:'John',comment:'Awesome!',date:'April 19, 2018 at 4:55pm'},
    {name:'Sue',comment:'Sweet!',date:'Oct 31, 2017 at 12:01am'}
];

const CommentDetails = function() {
    return (
        <div>
            {/* Looping through the data in order to separate all user's information to create a comment for each. Wrapping return statement inside loop. */}
            {names.map((val, index) => {
                return (
                    <div className="comment">
                        <a href="/" className="avatar">
                            {/* Grabbing fake avatar for each comment via Faker module. */}
                            <img src={faker.image.avatar()} alt="avatar" />
                        </a>
                        <div className="content">
                            {/* Using looped array to add data to JSX - use curly braces to tell React content can be found as variable. */}
                            <a href="/" className="author">
                                {val.name}
                            </a>
                            <div className="metadata">
                                <span className="date">{val.date}</span>
                            </div>
                            <div className="text">{val.comment}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentDetails;
