import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      ownername: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='pink' textAlign='center'>
              <Image src='/assets/logo.png' />
              {' '}Log-in to your account
        </Header>
            <Form size='large' onSubmit={this.props.login}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  name='ownername'
                  onChange={this.props.handleLoginChange}
                  placeholder='Username'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  name='password'
                  onChange={this.props.handleLoginChange}
                  placeholder='Password'
                  type='password'
                />

                <Button color='pink' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              {/*New to us? <a href='/'>Sign Up</a>*/}
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


//export default connect(mapStateToProps, { initializeSeeds, createNewSeed, notify })(Seeds)
export default LoginForm