import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Sport from'./components/Sport'


import bootstrap from 'bootstrap'; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Switch ,Route} from'react-router-dom'
function App() {
  
  return (
  <Router>
    <div>
     <Navbar />
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/sport" component={Sport}/>
     </Switch>
     
    </div>
  </Router>
   
  );
}

export default App;
