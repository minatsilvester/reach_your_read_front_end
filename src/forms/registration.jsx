import React, { useState } from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/registration';
import { Animated } from 'react-animated-css';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import { setDocumentTitle } from '../utils';
import '../css/registration.css';

class Registration extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentDidMount(){
    setDocumentTitle("Create Your Account|Reach your read")
  }


  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props;

    const data = {
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      gender: this.refs.gender.value,
      password: this.refs.password.value,
    }

    console.log(data)
    dispatch(Actions.signUp(data))
  }

  renderError(){
    console.log(this.props)
    if(!this.props.errors){
      return(
        false
      )
    }
    else{
      return(
        <Alert variant='danger'>{this.props.errors.message}</Alert>
      )
    }
  }


  render(){
    return(
      <div className="container">
        <div className="margin-top">
          <h1 className="normal-font"><span className="highlight">Reach Your Read</span> Every day</h1>
          <h2 className="normal-font">Your reading will<span className="highlight"> never fall behind</span> again</h2>
        </div>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <div className="row margin-top">
            <div className="col-md-6">
              <h1 className="normal-font">Create your account</h1>
              <h3 className="normal-font">Sign up now </h3>
              <h3 className="normal-font"><span className="highlight">choose on what</span> to see.</h3>
              <h3 className="normal-font">see what you<span className="highlight"> should see.</span> </h3>
            </div>
            <div className="col-md-6">
              {this.renderError()}
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" ref="first_name" placeholder="Your first name" required={true} />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" ref="last_name" placeholder="Your last name" required={true} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref="email" placeholder="Your email" required={true} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" ref="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Rather not say</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref="password" placeholder="Enter a Password" required={true} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) =>{ this.handleSubmit(e);}}>
                    Sign UP
                </Button>
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


const mapStateToProps = (state) => ({
  errors: state.registration.errors,
})

export default connect(mapStateToProps)(Registration);
