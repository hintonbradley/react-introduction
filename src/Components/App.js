import React from 'react';
import Home from './Home/Home';
import Nav from './Nav';
import Basics from './Basics/Basics';
import Comments from './Introduction/Reusability/Comments';
import Properties from './Introduction/Props/Properties';
import Nesting from './Introduction/Nesting/Nesting';
import ClassBasics from './Introduction/ClassBasics/ClassBasics';
import State from './Introduction/State/State';
import RenderIf from './Introduction/RenderIf/RenderIf';
import CompDidMount from './CompDidMount/CompDidMount';
import PPParent from './Introduction/PassingProps/PPParent';
import JSXExpressions from './Introduction/JSXExpressions/JSXExpressions';
import DefaultProperties from './Introduction/Props/DefaultProps';
import DomManipulation from './Events/DomManipulation/DomManipulation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BasicEventHandler from './Events/Basics/Basic';
import EventArrowFunction from './Events/Basics/ArrowFunction/ArrowFunction';
import ArrowFunctions from './Javascript/ArrowFunctions/ArrowFunctions';
import ParentCallback from './Events/ParentCallback/Parent/ParentCallback';
import Refs from './Introduction/Refs/Refs';
import '../main.css';

function App() {
  return (
    <Router>
      <div className="App component">
        <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/basics" component={Basics} />
            <Route path="/comments" component={Comments} />
            <Route path="/properties" component={Properties} />
            <Route path="/nesting" component={Nesting} />
            <Route path="/class-based-component" component={ClassBasics} />
            <Route path="/state" component={State} />
            <Route path="/renderif" component={RenderIf} />
            <Route path="/compDidMount" component={CompDidMount} />
            <Route path="/passingProps" component={PPParent} />
            <Route path="/jsxExpressions" component={JSXExpressions} />
            <Route path="/default-properties" component={DefaultProperties} />
            <Route path="/basic-event" component={BasicEventHandler} />
            <Route path="/dom-manipulation" component={DomManipulation} />
            <Route path="/event-arrow-function" component={EventArrowFunction} />
            <Route path="/arrowfunctions" component={ArrowFunctions} />
            <Route path="/parent-callback" component={ParentCallback} />
            <Route path="/refs" component={Refs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
