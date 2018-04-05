import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SeedList from './SeedList'

import { initializeSeeds, createNewSeed } from "../actions/actions";

import { notify } from "../actions/actions"


class Seeds extends React.Component {
  constructor() {
    super();

    this.state = {
      test: "",
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  }

  componentDidMount() {
    this.props.initializeSeeds()
  }

  setStateHandler() {
    var i = {
      ownername: "uusi",
      identity: "nkm@hd",
      companionUUID: "717F860E-F0E6-4C93-A4E3-CC724D27E05B",
      facebookID: "120144918465781",
      devices: {
        "717F860E-F0E6-4C93-A4E3-CC724D27E05E": "nkm@iphone5"
      }
    };
    var myA = this.state.data;
    myA.push(i);
    this.setState({ data: myA });
  }




  render() {

    const seedsToShow = () => {
      return this.context.store.getState().seeds
    }


    return (
      <div>

        <SeedForm createNewSeed={this.props.createNewSeed} />
        <SeedList seeds={seedsToShow()} />

      </div>
    );
  }
}

class SeedForm extends React.Component {

  constructor() {
    super();
    this.clearInput = this.clearInput.bind(this);
    this.updateState = this.updateState.bind(this);

  }

  updateState(e) {
    this.setState({ test: e.target.value });
  }

  clearInput() {
    this.setState({ test: '' });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }


  addSeedFile = async (event) => {
    event.preventDefault()

    //const content = event.target.note.value
    //event.target.note.value = ''
    const newSeedObject = {
      "identity": "alice@hd22",
      "facebookID": "119560198524790",
      "companionUUID": "717F860E-F0E6-4C93-A4E3-CC724D27E05E",
      "devices": {
        "717F860E-F0E6-4C93-A4E3-CC724D27E05E": "alice@iphone",
        "8B034F7B-FA9B-540F-ACF3-88C0CA70C84F": "alice@ibeacon"
      }
    }
    this.props.createNewSeed(newSeedObject)
  }


  render() {
    return (
      <div className="seedForm">
        {/*<h4>Device identity: {this.state.test}@device</h4>*/}
        Username:
        <input type="text" value={this.context.store.getState().test} onChange={this.updateState} ref="myInput" />
        <br />
        <br />
        <button onClick={this.addSeedFile}>Create Seed file</button>
        <button onClick={this.clearInput}>CLEAR</button>
      </div>
    );
  }
}

SeedForm.contextTypes = {
  store: PropTypes.object
}

//export default Seeds;
const mapStateToProps = (state) => {
  const seedsToShow = state.seeds//.filter(seed => seed.ownername.toLowerCase().includes(state.filter))
  return {
    seedsToShow
  }
}

Seeds.contextTypes = {
  store: PropTypes.object
}

export default connect(mapStateToProps, { initializeSeeds, createNewSeed, notify })(Seeds)