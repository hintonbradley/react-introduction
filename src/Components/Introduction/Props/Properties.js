import React from 'react';
import PropertyDetails from './PropertyDetails';
import propDetails from '../../../img/propDetails.jpg';
import props from '../../../img/properties.jpg';

const Properties = function() {
    return (
        <div className="ui container txt-ctr mt-20">
            <h3>Passing Poperties</h3>
            <div className="name">Property being passed down is:</div>
            < PropertyDetails 
            text='I am Groot' 
            name="Rocket" 
            team="Guardians of the Galaxy" />
            <div className="code-example">
                <div className="img-example">
                    <p>Passing down props by adding data to child component tag in JSX (text, name and team).</p>
                    <img src={props} className="img-md" alt="test"/>
                </div>
                <div className="img-example">
                    <p>Accessing props by adding a 'props' argument in the component constructor and referencing that variable in the JSX using curly braces (props.text, props.name and props.team).</p>
                    <img src={propDetails} className="img-sm" alt="test"/>
                </div>
            </div>
        </div>
    )
}

export default Properties;



