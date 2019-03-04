import Board from './Board'
import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TimeTract from "./TimeTract";
import EncounterTreasure from "./EncounterTreasure";
import Home from "./Home";
import Characters from "./Characters";
import Powers from "./Powers";
import ScrollViewer from './ScrollViewer'


class App extends Component {

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <div className="container-fluid">
          <Router>
            <Fragment>
              <ScrollViewer/> 
              <Route exact path="/" component={Home} />
              <Route path="/char-select" component={Characters} />
              <Route path="/powers/:id" component={Powers} />
              <Route path="/timetract" component={TimeTract} />
              <Route path="/encounter-treasure" component={EncounterTreasure} />
              <Route path="/board" component={Board} />
            </Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App