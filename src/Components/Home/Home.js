import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = function() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 link-container">
                    <ul className="p-10 ul-links">
                        <li className="txt-ctr border-b"><h2>Introduction</h2></li>
                        <Link to='/basics'>
                            <li>Basics</li>
                        </Link>
                        <Link to='/comments'>
                            <li>Reusability (Comment)</li>
                        </Link>
                        <Link to='/properties'>
                            <li>Props</li>
                        </Link>
                        <Link to='/nesting'>
                            <li>Nesting</li>
                        </Link>
                        <Link to='/class-based-component'>
                            <li>Class Based Component</li>
                        </Link>
                        <Link to='/state'>
                            <li>State</li>
                        </Link>
                        <Link to='/renderif'>
                            <li>Render if...</li>
                        </Link>
                        <Link to='/passingProps'>
                            <li>Passing Props (Class Based)</li>
                        </Link>
                        <Link to='/jsxExpressions'>
                            <li>JSX Expressions</li>
                        </Link>
                        <Link to='/default-properties'>
                            <li>Default Properties</li>
                        </Link>
                        <Link to='/refs'>
                            <li>Refs</li>
                        </Link>
                    </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 link-container">
                        <ul className="p-10 ul-links">
                            <li className="txt-ctr border-b"><h2>Lifecycle Methods</h2></li>
                            <Link to='/compDidMount'>
                                <li>Component Did Mount</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 link-container">
                        <ul className="p-10 ul-links">
                            <li className="txt-ctr border-b"><h2>Javascript</h2></li>
                            <Link to='/arrowfunctions'>
                                <li>Arrow Functions</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 link-container">
                        <ul className="p-10 ul-links">
                            <li className="txt-ctr border-b"><h2>Events</h2></li>
                            <Link to='/basic-event'>
                                <li>Basic Dom Event Handling</li>
                            </Link>
                            <Link to='/event-arrow-function'>
                                <li>Basic Event (w/ arrow func.)</li>
                            </Link>
                            <Link to='/dom-manipulation'>
                                <li>Dom Manipulation</li>
                            </Link>
                            <Link to='/parent-callback'>
                                <li>Parent Callbacks (passing props up)</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;