import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import LoginForm from './components/LoginForm'
import SeedCreationForm from './components/SeedCreationForm'
import About from './components/About'
import Seeds from './components/Seeds'
import Notification from './components/Notification'

import { Container } from 'semantic-ui-react'
import logo from './logo.svg'
import './App.css'

import seedsService from './services/seedsService'
import ownersService from './services/ownersService'
import authService from './services/authService'


class App extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      header: "Welcome to Human Data Model Hub",
      content: "HUB for deploying seed files to the computing environment"
    }

    this.someCallback = this.someCallback.bind(this)

  }

  componentWillMount() {
    seedsService.getAll().then(seeds =>
      this.setState({ seeds })
    )
    const loggedUserJSON = window.localStorage.getItem('loggedSeedsAppUser')
    if (loggedUserJSON) {
      const owner = JSON.parse(loggedUserJSON)
      this.setState({ owner })
      seedsService.setToken(owner.token)
      ownersService.setToken(owner.token)
    }
  }

  notify = (message, type = 'info') => {
    this.setState({
      notification: {
        message, type
      }
    })
    setTimeout(() => {
      this.setState({
        notification: null
      })
    }, 10000)
  }


  logout = () => {
    window.localStorage.removeItem('loggedSeedsAppUser')
    this.notify('logged out')
    this.setState({ owner: null })
    seedsService.setToken(null)
    ownersService.setToken(null)
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const owner = await authService.login({
        ownername: this.state.ownername,
        password: this.state.password
      })

      window.localStorage.setItem('loggedSeedsAppUser', JSON.stringify(owner))
      seedsService.setToken(owner.token)
      ownersService.setToken(owner.token)
      this.notify('welcome back!')
      this.setState({ ownername: '', password: '', owner })
    } catch (exception) {
      this.notify('ownername or password incorrect', 'error')
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  handleLoginChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }





  someCallback(e) { }


  render() {

    if (!this.state.owner) {
      return (
        <LoginForm login={this.login} logout={this.logout} handleLoginChange={this.handleLoginChange} />
      )
    } else {
      
      return (
        <Container>

          <header className="">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="">{this.state.header}</h1>
          </header>

          <div>
            <p className="">{this.state.content}</p>

            <Router>
              <div>
                <div className="ui secondary pointing menu">
                  <Link to="/" className="active item">Seeds</Link>
                  <Link to="/owners" className="item">Create Seed</Link>
                  <Link to="/about" className="item">About</Link>
                  <Link to="/" className="item">Friends</Link>

                  <div className="right menu">
                    <a className="ui item" onClick={this.logout}>Logout</a>
                  </div>
                </div>

                <div className="ui segment">
                  <Notification notification={this.state.notification} />
                </div>

                <Route exact path="/" render={() => <Seeds />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/owners" render={() => <SeedCreationForm />} />
              </div>
            </Router>

          </div>


        </Container>
      );

    }



  }
}





const mapStateToProps = state => {
  return { visibleSeeds: state.seeds }
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

