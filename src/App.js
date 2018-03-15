import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

import About from './components/About';
import Seeds from './components/Seeds';
import AddSeed from './components/AddSeed'
import SeedList from './components/SeedList'

import {addSeed} from './actions/actions'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      header: "Welcome to Human Data Model Hub",
      content: "HUB for deploying seed files to the computing environment"
    }

    this.someCallback = this.someCallback.bind(this);

  }

  someCallback(e) { }


  render() {


    const {dispatch, visibleSeeds} = this.props;


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.header}</h1>
        </header>

        <div className={''}>
        <p className="App-intro">{this.state.content}</p>

          <Router>
            <div>

              <Link to="/" className="uk-button uk-margin-bottom uk-margin-right">Seeds</Link>
              <Link to="/about" className="uk-button uk-margin-bottom uk-margin-right">About</Link>

              <Route exact path="/" component={Seeds} />
              <Route path="about" component={About} />

            </div>
          </Router>

          <AddSeed onAddClick={identity => dispatch(addSeed(identity))} />
          <SeedList seeds={visibleSeeds} />


        </div>


      </div>
    );
  }
}





const mapStateToProps = state => {
  return {visibleSeeds: state.seeds}
}

const mapDispatchToProps = dispatch => {
  return {
    onSeedClick: id => {
      //dispatch(toggleSeed(id))
    }
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default VisibleApp

