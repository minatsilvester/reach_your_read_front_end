import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import { setDocumentTitle } from '../utils';
import Actions from '../actions/session';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentDidMount(){
    setDocumentTitle("Sign in|Reach your read")
  }

  renderError(){
    console.log(this.props)
    if(!this.props.errors){
      return false
    }
    return (
      <Alert variant='danger'>{this.props.errors.message}</Alert>
    )
  }

  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props;

    const data = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    console.log(data)
    dispatch(Actions.signIn(data))
  }

  render(){
    return(
      <div className="container">
        <div className="normal-font margin-top">
          <h1><span className="highlight">Sign In</span></h1>
        </div>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <div className="row margin-top">
            <div className="col-md-6">
              <h1 className="normal-font"><span className="highlight">Catch up</span> on your read</h1>
              <h3 className="normal-font">you <span className="highlight">don't</span> want to <span className="highlight">fall behind</span></h3>
            </div>
            <div className="col-md-6">
              {this.renderError()}
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="BasicFormEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref="email" placeholder="Enter your email" required={true} />
                </Form.Group>
                <Form.Group controlId="BasicFormPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref="password" placeholder="Enter your email" required={true} />
                </Form.Group>
                <Button variant="primary" type="submit">Sign in</Button>
              </Form>
            </div>
          </div>
        </Animated>
        <br/>
        <br/>
        <hr className="hr_style"/>
      </div>
    );
  }
}

const mapStateToProps= (state) => ({
  errors: state.session.error,
})

export default connect(mapStateToProps)(SignIn);
