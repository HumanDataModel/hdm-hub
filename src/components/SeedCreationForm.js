import React from 'react'
import { Step, Icon, Grid, Form, Segment, Button } from 'semantic-ui-react'

import seedsService from '../services/seedsService'
import ownersService from '../services/ownersService'
import authService from '../services/authService'

const UsernameForm = (props) => {

  const showWhenVisible = { height: '100%', display: props.visible ? '' : 'none' }

  return (
    <Grid
      textAlign='center'
      style={showWhenVisible}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large'>
          <p>Select ownername that is unique within the whole system.</p>
          
          <Form.Input
          onChange={props.handleChange}
            fluid
            icon='user'
            iconPosition='left'
            name='ownername'
            placeholder='Username'
          />
          <Button color='pink' fluid size='large' name='ownername' onClick={props.handleNext}>Next</Button>

        </Form>

      </Grid.Column>
    </Grid>
  )
}

const PasswordForm = (props) => {

  const showWhenVisible = { height: '100%', display: props.visible ? '' : 'none' }

  return (
    <Grid
      textAlign='center'
      style={showWhenVisible}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large' onChange={props.handleChange} >
          <p>Define your password.</p>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            name='password'
            placeholder='Password'
            type='password'
          />
          <Button color='pink' fluid size='large' name='password' onClick={props.handleNext}>Next</Button>

        </Form>

      </Grid.Column>
    </Grid>
  )
}


const ConfirmForm = (props) => {

  const showWhenVisible = { height: '100%', display: props.visible ? '' : 'none' }
  return (
    <Grid
      textAlign='center'
      style={showWhenVisible}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large' onSubmit={props.handleSubmit}>
          <p>Hit submit to create new seed!</p>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            name='ownername'
            disabled
            content={props.ownername}
            placeholder='Username'
          />
          <Button color='pink' fluid size='large' name='confirm' type='submit' >Submit</Button>

        </Form>

      </Grid.Column>
    </Grid>
  )
}


const StepGroup = ({ props }) => {

  return (

    <Step.Group fluid>
      <Step active={props.ownernameFormVisible}>
        <Icon name='user' />
        <Step.Content>
          <Step.Title>Username</Step.Title>
          <Step.Description>Choose your ownername</Step.Description>
        </Step.Content>
      </Step>

      <Step active={props.passwordFormVisible}>
        <Icon name='lock' />
        <Step.Content>
          <Step.Title>Password</Step.Title>
          <Step.Description>Choose password</Step.Description>
        </Step.Content>
      </Step>

      <Step active={props.confirmFormVisible}>
        <Icon name='add user' />
        <Step.Content>
          <Step.Title>Confirm</Step.Title>
          <Step.Description>Please, comfirm and submit</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>

  )
}

class SeedCreationForm extends React.Component {
  constructor() {
    super()
    this.state = {
      ownername: '',
      password: '',
      ownernameFormVisible: true,
      passwordFormVisible: false,
      confirmFormVisible: false
    }
  }
  handleDetailsChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitting', this.state)
/*
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
*/
  }

  handleNext = (event) => {
    if (event.target.name === 'ownername') {
      this.setState({
        ownernameFormVisible: false,
        passwordFormVisible: true,
        confirmFormVisible: false
      })
    } else if (event.target.name === 'password') {
      this.setState({
        ownernameFormVisible: false,
        passwordFormVisible: false,
        confirmFormVisible: true
      })
    }
  }

  render() {
    return (
      <div>
        <StepGroup props={this.state} />
        <Segment attached>
          <UsernameForm visible={this.state.ownernameFormVisible} handleChange={this.handleDetailsChange} handleNext={this.handleNext} />
          <PasswordForm visible={this.state.passwordFormVisible} handleChange={this.handleDetailsChange} handleNext={this.handleNext} />
          <ConfirmForm visible={this.state.confirmFormVisible} handleSubmit={this.handleSubmit} />
        </Segment>
      </div>
    )
  }
}

export default SeedCreationForm