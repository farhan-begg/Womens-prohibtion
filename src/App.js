import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Farhan from './components/pages/Farhan';
import Sandy from './components/pages/Sandy';
import Shaan from './components/pages/Shaan';
import Mark from './components/pages/Mark';
import Arvin from './components/pages/Arvin';
import Works from './components/pages/Works';
import Trailer from "./components/Trailer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/farhan' component={Farhan} />
          <Route path='/sandy' component={Sandy} />
          <Route path='/shaan' component={Shaan} />
          <Route path='/mark' component={Mark} />
          <Route path='/arvin' component={Arvin} />
          <Route path='/cited' component={Works} />
          <Route path='/trailer' component={Trailer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
