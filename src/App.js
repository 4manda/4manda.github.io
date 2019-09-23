import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';

const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
        </div>
        {/* TODO: Add Footer */}
      </div>
    </Router>
  )
}

export default App;
