import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';

function About() {
  return <h1>About Page</h1>;
}

function Home() {
  return <h1>Home Page</h1>;
}

function Funk() {
  return (
    <div>
      <div>Super Roots</div>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>

      <Switch>
        {/* Here few methode to navigate between page... */}

        {/* <Route exact path="/" render={() => <h1>Home Page!</h1>} />
        <Route path="/about" render={() => <h1>About Page!</h1>} /> */}

        {/* <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} /> */}

        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} /> */}

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

class C extends Component {
  render() {
    return (
      <Router>
        <Funk />
      </Router>
    );
  }
}

export default C;
