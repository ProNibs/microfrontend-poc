import './App.css';

import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import TestMe from './TestMe';
//import TestYou from './TestYou';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_ABOUT_US_HOST: aboutUsHost
} = process.env;

const defaultHistory = createBrowserHistory();

const AboutUsFrontEnd = ({ history }) => (
  <MicroFrontend history={history} host={aboutUsHost} name="AboutUs" />
);


function App() {
  console.log(aboutUsHost);
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={TestMe} />
          <Route exact path="/home" component={AboutUsFrontEnd} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
