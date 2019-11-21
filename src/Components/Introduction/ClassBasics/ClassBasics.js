
import React from 'react';
import ClassBasicsCode from '../../../img/classBasicsCode.jpg';
import BasicClassExample from '../../../img/basicClassExample.jpg';

// Creating a class based component... 

// React class based components should only have one single method in it (render) that includes a return statement for your JSX. In order to add other methods and functionality to our class we can do the following... 

// Class based components must extend React.Component to pull in functionaliy (methods) that are attached to React.Component.

// Creating a React class based component - we extend the React.Component in order to pull in functionality (methods) that are attached to it to be used on our class component.
class ClassBasics extends React.Component {

    // 
    constructor (props) {
        super (props);

        this.state = {
            name: 'James'
        }
    }

    // Adding one single method to the class - render method will include a return statement for JSX.
    render () {
        console.log('This is a class based component')
        return (
            <div>
                <div className="component">
                    <h4>From Component: <u>Class Basics</u></h4>
                </div>
                <div className="code-example">
                    <div className="img-example">
                        <p>To create a class based component you must...</p>
                        <ul className="mt-20">
                            <li>Use the class keyword.</li>
                            <li>extend React.Component.</li>
                            <li>Create a render method that includes a return statement for your JSX.</li>
                        </ul>
                        <img src={ClassBasicsCode} className="img-md" alt="test"/>
                    </div>
                    <div className="img-example">
                        <p>...additionally, if you're using state, you must...</p>
                        <ul className="mt-20">
                            <li>Create a constructor method using props as a parameter.</li>
                            <li>Call the super constructor (React.Component).</li>
                            <li>Create a object (state) to add your state.</li>
                        </ul>
                        <img src={BasicClassExample} className="img-full" alt="test"/>
                    </div>
                </div>
            </div>
            // <div className="component">
            //     <h4>From Component: <u>Class Basics</u></h4>
            // </div>
            // <div>
            //     <h2>This is the Class Basics page</h2>
            //     <hr/>
            //     <ul className="ul-links">
            //         <li className="m-none">To create a class based component you must...</li>
            //         <ol className="mt-20">
            //             <li>Use the class keyword.</li>
            //             <li>extend React.Component.</li>
            //             <li>Create a render method that includes a return statement for your JSX.</li>
            //         </ol>
            //         <img className="img-lg mt-20 img-ctr" src={ClassBasicsCode} alt="Inline styles" />
            //     </ul>
            //     <ul className="ul-links mt-20">
            //         <li className="m-none">...additionally, if you're using state, you must...</li>
            //         <ol className="mt-20">
            //             <li>Create a constructor method using props as a parameter.</li>
            //             <li>Call the super constructor (React.Component).</li>
            //             <li>Create a object (state) to add your state.</li>
            //         </ol>
            //         <img className="img-full mt-20 img-ctr" src={BasicClassExample} alt="Inline styles" />
            //     </ul>
            // </div>
        )
    }
}

export default ClassBasics;