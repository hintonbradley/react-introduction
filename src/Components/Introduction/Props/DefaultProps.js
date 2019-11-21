
import React from 'react';
import DefaultPropsDetails from './DefaultPropsDetails';
import DPDImg from '../../../img/defaultPropsDetails.jpg';
import DPImg from '../../../img/defaultProps.jpg';

const DefaultProps = function() {
    return (
        <div>
            < DefaultPropsDetails component="DefaultProps" message="A message being passed down via props in the Default Props component."/>
            < DefaultPropsDetails />
            <div className="code-example">
                <div className="img-example">
                    <p>Passing down a message using props as attribute in DefaultProps component.</p>
                    <img src={DPImg} className="img-sm" alt="test"/>
                </div>
                <div className="img-example">
                    <p>Setting a default message using the defaultProps attribute in the DefaultPropsDetails component (in case no message is passed down in props in parent component).</p>
                    <img src={DPDImg} className="img-md" alt="test"/>
                </div>
            </div>
        </div>
    )
}

export default DefaultProps;

