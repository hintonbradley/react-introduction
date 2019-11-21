import React from 'react';
import ES5 from '../../../img/ES5.jpg';
import ES5this from '../../../img/ES5this.jpg';
import arrow from '../../../img/arrow.jpg';

const ArrowFunctions = function() {
    return (
        <div>
            <div className="code-example">
                <div className="img-example">
                    <p>If we want Mark to say hello to all the people in the array, this code will return an error, because this is re-defined within the child function. </p>
                    <img src={ES5} className="img-sm" alt="test"/>
                </div>
                <div className="img-example">
                    <p>If we were to solve this issue in ES5, we would need to assign a variable to 'this' in the parent function and use it inside the child function.</p>
                    <img src={ES5this} className="img-sm" alt="test"/>
                </div>
                <div className="img-example">
                    <p>We can simplify this issue by using an arrow function. Arrow functions don't re-define the 'this' keyword in child functions.</p>
                    <img src={arrow} className="img-sm" alt="test"/>
                </div>
            </div>
        </div>
    )
}

export default ArrowFunctions;


