import React from 'react';
import inlineImg from '../../img/inlineStyle.jpg';
import variables from '../../img/variables.jpg';
import cpntImg from '../../img/cpnt.jpg';
import concepts from '../../img/reactConcepts.jpg';
import componentHierarchy from '../../img/componentHierarchy.jpg';
import props from '../../img/props.jpg';
import props2 from '../../img/props2.jpg';
import classComponents from '../../img/classComponents.jpg';
import classOrFunction from '../../img/classOrFunction.jpg';
import classComponent from '../../img/classComponent.jpg';
import stateBasics from '../../img/stateBasics.jpg';
import classBasics from '../../img/basicClassExample.jpg';
import lifecycleMethods from '../../img/lifecycleMethods.jpg';
import initializeState from '../../img/initializeState.jpg';
import comparisonClassFunctional from '../../img/comparisonClassFunctional.jpg';
import controlledList from '../../img/controlledList.jpg';
import controlledListExample from '../../img/controlledListExample.jpg';

const Basics = function() {
    return (
        <div className="component">
            <section className="basic-card basic-card-light">
                <h2 className="txt-ctr"><u>What is a component?</u></h2>
                <div>
                    <img className="img-md img-ctr pb-10" src={cpntImg} alt="component" />
                </div>
            </section>
            <section className="basic-card basic-card-dark">
                <h2 className="txt-ctr"><u>Differences between JSX and HTML:</u></h2>
                <ul className="ul-links">
                    <li>
                        <h3 className="in-bl m-none">Double curly braces &#123;&#123;&#125;&#125;</h3> 
                        - If used as an attribute in JSX, the first set of curly braces indicate to React that a Javascript object is to follow. Therefore anything inside the second set of curly braces should be a Javascript object. e.g. replacing semi-colons with commas, etc.
                    </li>
                    <li className="m-none"><u>Examples: Inline styling using double curly braces</u></li>
                    <img className="img-md img-ctr" src={inlineImg} alt="Inline styles" />
                    <li>
                        <h3 className="in-bl m-none">class / className</h3> 
                        - Since there is a 'class' Javascript keyword, in order to avoid collisions, in JSX we use className instead.<br />Note: some other Javascript keywords may cause errors if they are used in JSX (e.g. for, as opposed to htmlFor used in React)
                    </li>
                    <li>
                        <h3 className="in-bl m-none">Variable usage</h3>
                        - Variable assignment can be done in component files and then (if curly braces are used in JSX but outside of html tags-non-attributes) can be used in JSX by wrapping it in curly braces. This indicates to React that the contents reference a variable.
                    </li>
                    <li className="m-none"><u>Examples: Variable useage</u></li>
                    <img className="img-md img-ctr" src={variables} alt="Inline styles" />
                </ul>
            </section>
            <section className="basic-card basic-card-light">
                <h2 className="txt-ctr"><u>3 React Concepts</u></h2>
                <div>
                    <img className="img-md img-ctr pb-10" src={concepts} alt="concepts" />
                </div>
                <ul className="ul-links">
                    <li>
                        <h3 className="in-bl m-none">Nesting</h3> 
                        - When we make multiple components we nest them to create a complete application.
                    </li>
                    <li>
                        <h3 className="in-bl m-none">Reusability</h3> 
                        - Components like buttons, text fields, forms, cards, etc can all be reused throughout the application since they all have a similar structure and look.
                    </li>
                    <li>
                        <h3 className="in-bl m-none">Configuration</h3>
                        - Since each component will have a slightly differnt piece from each other similar component, we will need to customize each component that we create.
                    </li>
                </ul>
            </section>
            <section className="basic-card basic-card-dark">
                <h2 className="txt-ctr"><u>Component Hierarchy</u></h2>
                <div>
                    <img className="img-md img-ctr pb-10" src={componentHierarchy} alt="componentHierarchy" />
                </div>
                <ul className="ul-links">
                    <li>
                        <h3 className="in-bl m-none">Component Hierarchy</h3> 
                        - A diagram that tells us what components are currently being displayed in the React app and the relationship between them.
                    </li>
                </ul>
            </section>
            <section className="basic-card basic-card-light">
                <div>
                    <img className="img-md img-ctr pb-10" src={props} alt="props" />
                </div>
                <ul className="ul-links">
                    <li>
                        <img className="img-md img-ctr pb-10" src={props2} alt="props2" />
                    </li>
                    <li>
                        In the image above, the App passes data (props) down through it's children to the js file that will require specific configuration to create various similar looking components (with differnet data from props).
                    </li>
                    <li>
                        Note: The props system is for passing data from a parent down to the child and <b>NOT</b> vice versa.
                    </li>
                </ul>
            </section>
            <section className="basic-card basic-card-dark">
                <h2 className="txt-ctr"><u>Class or Function based components</u></h2>
                <ul className="ul-links">
                    <li>
                        <img className="img-md img-ctr pb-10" src={classOrFunction} alt="props" />
                    </li>
                    <li>When to use class based components...</li>
                    <li>
                        <img className="img-md img-ctr pb-10" src={classComponents} alt="props" />
                    </li>
                    <li>Comparison of functional (stateless) and class (stateful) components...</li>
                    <li>
                        <img className="img-lg img-ctr pb-10" src={comparisonClassFunctional} alt="props" />
                    </li>
                </ul>
            </section>
            <section className="basic-card basic-card-light">
                <h2 className="txt-ctr"><u>Class based components</u></h2>
                <ul className="ul-links">
                    <li>
                        <img className="img-md img-ctr pb-10" src={classComponent} alt="class based component" />
                    </li>
                    <li>
                        <img className="img-full img-ctr pb-10" src={classBasics} alt="class based component" />
                    </li>
                </ul>
            </section>
            <section className="basic-card basic-card-dark">
                <h2 className="txt-ctr"><u>State</u></h2>
                <ul className="ul-links">
                    <li>
                        <img className="img-md img-ctr pb-10" src={stateBasics} alt="class based component" />
                    </li>
                    <li>We can initialize state without a constructor simply because we have Babel to automatically initialize our variables inside the class's constsructor.</li>
                    <li>
                        <img className="img-full img-ctr pb-10" src={initializeState} alt="class based component" />
                    </li>

                </ul>
            </section>
            <section className="basic-card basic-card-light">
                <h2 className="txt-ctr"><u>Lifecycle Methods</u></h2>
                <ul className="ul-links">
                    <li>
                        <img className="img-full img-ctr pb-10" src={lifecycleMethods} alt="class based component" />
                    </li>
                    <li><h3 className="in-bl">Constructor:</h3> Constructor is a good method to do data initilization (props).</li>
                    <li><h3 className="in-bl">Render:</h3> Only used to return JSX.</li>
                    <li><h3 className="in-bl">ComponentDidMount:</h3> Used to do initial data loading for the component, or to kick off a one-time outside process, e.g. getting user's geolocation. (Data-loading code should be centralized in one method - usually in componentDidMount and NOT in constructor.</li>
                    <li><h3 className="in-bl">ComponentDidUpdate:</h3> Used to do data loading for the component that needs to be done every time it's updated, e.g. update time.</li>
                    <li><h3 className="in-bl">ComponentWillUnmount:</h3> Used every time a component is removed from the screen. Any code used for cleanup or unmounting will go here.</li>
                </ul>
            </section>
            <section className="basic-card basic-card-dark">
                <h2 className="txt-ctr"><u>Controlled vs. Uncontrolled Component</u></h2>
                <ul className="ul-links">
                    <li>
                        <img className="img-sm img-ctr pb-10" src={controlledList} alt="controlled component" />
                    </li>
                    <li>
                        <img className="img-md img-ctr pb-10" src={controlledListExample} alt="controlled component example" />
                    </li>
                    <li>1. When user types in an input, the callback ( e => this.setState... ) gets invoked.</li>
                    <li>2. The callback pulls out the value of the event object and then update the our state object with the value.</li>
                    <li>3. Whenever state is updated, the component is re-rendered, therefore updating the value prop of the input with the updated state. The value prop overwrites whatever was previously in the input field.</li>
                </ul>
                <ul className="mt-20">
                    <li><u><b>Note:</b></u> Without a controlled component (uncontrolled), the only place the data the user types in is in the HTML. If we wanted to find the value at any time, we would have to go into the HTML to obtain it.</li>
                    <li><u><b>Note:</b></u> However, with a controlled component, we can access the value at any time in our application without having to access the DOM.</li>
                    <li><u><b>Note:</b></u> We used conrolled components because we want to centralize all our data the user provides inside our React component and NOT store data inside the DOM.</li>
                </ul>
            </section>
        </div> 
    )
}

export default Basics;