import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Animated } from 'react-animated-css';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { setDocumentTitle } from '../utils';
import { Form, Button, InputGroup, Col, Image } from 'react-bootstrap';
import SessionActions from '../actions/session';
import SkillActions from '../actions/update';

class UpdateProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      gender: '',
      file: '',
      imagePreviewUrl: '',
      skills: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }


  ensureAuthenticated(){
    const { dispatch } = this.props;

    if(!this.props.currentUser && localStorage.getItem('jwtAuthToken')){
      dispatch(SessionActions.CurrentUser())
      dispatch(SkillActions.getAllSkill())
    }
    else if(!localStorage.getItem('jwtAuthToken')){
      window.location="/sign_in"
    }
  }

  componentDidMount(){
    setDocumentTitle("Update Your Profile")
    this.ensureAuthenticated()
  }

  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props;
    console.log(this.state.file)

    const data = {
      avatar: this.state.file,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      skills: this.state.skills,
      email: this.props.currentUser.email,
    }

    dispatch(SkillActions.updateUser(data))
  }

  handleStateFromProps(){
    if(this.props.currentUser){
      this.setState({
        first_name: this.props.first_name,
        last_name: this.props.last_name
      })
    }
  }


  handleInputChange(e){

    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleAutoCompleteChange(value){
    this.setState({
      skills: value
    })
  }


  static getDerivedStateFromProps(props, state){
    if(props.currentUser && state.first_name === ''){
      return {
        first_name: props.currentUser.first_name,
        last_name: props.currentUser.last_name,
        gender: props.currentUser.gender,
        skills: props.currentUser.skills,
      }
    }
    console.log("true")
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps)
    console.log(prevState)
    console.log(this.state)
  }

  handleImageChange(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  firstTimeLogger(){
    if(this.props.currentUser && this.props.currentUser.first_time_logger)
    return(
      <h1>Let's get you<span className="highlight"> set up for reading</span></h1>
    )
  }


  render(){
    console.log(this.props)
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if(imagePreviewUrl) {
      $imagePreview = (
        <Col md={6}>
        <Image src={imagePreviewUrl} height="200vh" width="200vh" roundedCircle/>
        </Col>
        );
    } else {
      $imagePreview = (
          <Image src="/images/no-profile-pic.jpg" height="200vh" width="200vh" roundedCircle />
      );
    }
    if(!this.props.currentUser || !this.props.available_skills)
    {
      return(
        <h1>Loading...</h1>
      );
    }
    else{
      return(
        <div className="container normal-font margin-top">
          <h1><span className="highlight">Update</span> Your Profile,</h1>
          {this.firstTimeLogger()}
          <Animated animationIn="fadeInLeft">
            <Form onSubmit={this.handleSubmit}>
                <div className="row margin-top">
                  <div className="col-md-6">
                    <Form.Group controlId="BasicFormFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" ref="first_name" placeholder="Your First Name" value={this.state.first_name} onChange={this.handleInputChange} required={true}/>
                    </Form.Group>
                    <Form.Group controlId="BasicFormSecondName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" ref="last_name" placeholder="Your Last Name" value={this.state.last_name} onChange={this.handleInputChange} required={true}/>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Label>Gender</Form.Label>
                    <Form.Group controlId="exampleForm.ControlSelect">
                      <Form.Control ref="gender" as="select" default={this.state.gender}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Rather not say</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Label>Enter Skills you would like to read on</Form.Label>
                    <Autocomplete
                      multiple
                      value={this.state.skills}
                      onChange={(event, value) => {console.log(value); this.handleAutoCompleteChange(value)}}
                      options={this.props.available_skills}
                      getOptionLabel={(option) => option}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Search for skills, programming languages, qualities etc."
                          placeholder="My skills"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="margin-top">
                  <center>
                    <Button variant="primary" type="submit">Update profile</Button>
                  </center>
                </div>
            </Form>
          </Animated>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  available_skills: state.updateParams.available_skills,
})

export default connect(mapStateToProps)(UpdateProfile);
