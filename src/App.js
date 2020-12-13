import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Nav from "./components/Nav.js";
import Home from './components/pages/HomePage/Home.js';
import About from './components/pages/AboutPage/About.js';
import Resume from './components/pages/ResumePage/Resume.js';
import Forager from './components/pages/ForagerPage/Forager.js';
import Vitro from './components/pages/VitroPage/Vitro.js';
import Footer from './components/pages/Footer/Footer.js';

// Create main component App, with React Router components for each component to load
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/forager' component={Forager}/>
        <Route path='/vitro' component={Vitro}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;