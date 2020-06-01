import React, { useState } from 'react';
import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from '../Components/Sidebar.js';
import ContentContainer from '../Components/ContentContainer';
import images from '../resources/images.json';
import copy from '../resources/copy.json';

function App() {

  // only affects mobile
  // is content view is true when user clicks a link from the mobile menu
  const [isContentView, setContentView] = useState(false);

  return (
    <div className="App">  
      <Router>
        <Sidebar updateContentView={setContentView}/>
        <Switch>
          <Route exact={true} path="/">
            <ContentContainer 
              keyword={""} 
              imageUrls={images.home}
              text={copy.home}
              isContentView={isContentView}
              updateContentView={setContentView}/>
          </Route>
          <Route path="/projects">
            <ContentContainer 
              keyword={"Projects"} 
              imageUrls={images.projects}
              text={copy.projects}
              isContentView={isContentView}
              updateContentView={setContentView}/>
          </Route>
          <Route path="/about">
            <ContentContainer 
              keyword={"About"} 
              imageUrls={images.about}
              text={copy.about}
              isContentView={isContentView}
              updateContentView={setContentView}/>
          </Route>
          <Route path="/contact">
            <ContentContainer 
              keyword={"Contact"} 
              imageUrls={images.contact}
              text={copy.contact}
              isContentView={isContentView}
              updateContentView={setContentView}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
