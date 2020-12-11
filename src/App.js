import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import Nav from "./components/Nav.js";
import Home from './components/pages/HomePage/Home.js';
import About from './components/pages/AboutPage/About.js';
import Resume from './components/pages/ResumePage/Resume.js';
import Forager from './components/pages/ForagerPage/Forager.js';
import Forager2 from './components/pages/ForagerPage/Forager2.js';
import Vitro from './components/pages/VitroPage/Vitro.js';
import Footer from './components/pages/Footer/Footer.js';

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

/*
class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav/>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

function Home() {
  return <h2>Work</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Resume</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {// The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected //}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
*/