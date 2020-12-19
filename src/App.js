import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UnavailableScreen from './UnavailableScreen';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/home/:country' component={Home}/>
          <Route exact path='/error' component={UnavailableScreen}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
