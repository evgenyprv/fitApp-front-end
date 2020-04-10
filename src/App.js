import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './container/Home.jsx';
import Result from './container/Result.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result/" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
