import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import About from './components/About';

const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
        {/* TODO: Add Footer */}
      </div>
    </Router>
  )
}

export default App;
