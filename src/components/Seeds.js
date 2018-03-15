import React from 'react';
import ReactDOM from 'react-dom';


class Seeds extends React.Component {
  constructor() {
    super();

    this.state = {
      test: "",
      data: [
        {
          username: "bob",
          identity: "bob@hd",
          companionUUID: "FB694B90-F49E-4597-8306-171BBA78F844",
          facebookID: "102684690214746",
          devices: {
            "5BF2E050-4730-46DE-B6A7-2C8BE4D9FA36": "bob@iphoneSE",
            "FB694B90-F49E-4597-8306-171BBA78F844": "bob@mac"
          }
        }, {
          username: "alice",
          identity: "alice@hd",
          companionUUID: "717F860E-F0E6-4C93-A4E3-CC724D27E05E",
          facebookID: "119560198524790",
          devices: {
            "717F860E-F0E6-4C93-A4E3-CC724D27E05E": "alice@iphone",
            "8B034F7B-FA9B-540F-ACF3-88C0CA70C84F": "alice@ibeacon"
          }
        }, {
          username: "nkm",
          identity: "nkm@hd",
          companionUUID: "717F860E-F0E6-4C93-A4E3-CC724D27E05B",
          facebookID: "120144918465781",
          devices: {
            "717F860E-F0E6-4C93-A4E3-CC724D27E05E": "nkm@iphone5"
          }
        }
      ]
    }

    this.setStateHandler = this.setStateHandler.bind(this);

  }

  setStateHandler() {
    var i = {
      username: "uusi",
      identity: "nkm@hd",
      companionUUID: "717F860E-F0E6-4C93-A4E3-CC724D27E05B",
      facebookID: "120144918465781",
      devices: {
        "717F860E-F0E6-4C93-A4E3-CC724D27E05E": "nkm@iphone5"
      }
    };
    var myA = this.state.data;
    myA.push(i);
    this.setState({data: myA});
  }


  render() {
    return (
      <div>

        <SeedGenerator myTestProp={this.state.test} updateStateProp={this.updateState} setStateHandler={this.setStateHandler} clearInput={this.clearInput}></SeedGenerator>
        <SeedsList seedsProp={this.state.data}></SeedsList>

      </div>
    );
  }
}

class SeedGenerator extends React.Component {

  constructor() {
    super();

    this.state = {
      test: ""
    };

    this.clearInput = this.clearInput.bind(this);
    this.updateState = this.updateState.bind(this);

  }

  updateState(e) {
    this.setState({test: e.target.value});
  }

  clearInput() {
    this.setState({test: ''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div className="seedGenerator">
        <h4>Device identity: {this.state.test}@device</h4>
        Username:
        <input type="text" value={this.state.test} onChange={this.updateState} ref="myInput"/>
        <br/>
        <br/>
        <button onClick={this.props.setStateHandler}>Create Seed file</button>
        <button onClick={this.clearInput}>CLEAR</button>
      </div>
    );
  }
}

class SeedsList extends React.Component {

  render() {
    return (
      <div className="seedsList">
        <table>
          <tbody>
            {this.props.seedsProp.map((seedFile, i) => <SeedFileTableRow key={i} data={seedFile}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

class SeedFileTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.identity}</td>
        <td>{this.props.data.username}</td>
        <td>{this.props.data.companionUUID}</td>
      </tr>
    );
  }
}


export default Seeds;
