import React from 'react';
import '../css/App.css';
import Home from '../pages/Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from '../pages/Projects.js'
import About from '../pages/About.js'
import Contact from '../pages/Contact.js'

function App() {
  return (
    <div className="App">      
      <Router>
        <Switch>
          <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
