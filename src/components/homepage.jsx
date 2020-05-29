import React from 'react';
import { Animated } from 'react-animated-css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Jumbotron, Card, Image } from 'react-bootstrap';
import { setDocumentTitle } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

  componentDidMount(){
    setDocumentTitle("Reach Your Read")
  }

  render(){
    const styles = {
      color: 'white',
      height: '75vh',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/jumimgjpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };

    return(
      <>
      <Jumbotron fluid style={styles}>
        <div className="hero-text">
          <Animated animationIn="fadeIn" isVisible={true} animationInDelay={100} >
            <h1>Different worlds,</h1>
          </Animated>
          <Animated animationIn="fadeIn" isVisible={true} animationInDelay={500} >
            <h1> from the same place...</h1>
          </Animated>
          <Animated animationIn="fadeIn" isVisible={true} animationInDelay={1000} >
            <h3>Go past the barriers of platforms for reading!!!</h3>
          </Animated>
      </div>
      </Jumbotron>
      <div className="container">
          <h1 className="normal-font">Get Yourself the best <span className="highlight">reading recommendation,</span></h1>
          <h1 className="normal-font">Which are <span className="highlight">not limited by platforms.</span></h1>
          <hr className="hr_style"/>
          <h5>Get the best blog recommendation based on your skill needs and reading preferences regardless
          of the author and the platform that the blogs were written. Break the barrier of platform and discover
          your reading material.</h5>
          <hr className="hr_style"/>
          <div>
            <ScrollAnimation animateIn="fadeInLeft">
              <Image src="images/update.png" fluid/>
            </ScrollAnimation>
            <h5>Set up your environment, update your profile to choose on what you want to see and read, get recomendations accordingly across different platforms.</h5>
          </div>
          <hr className="hr_style" />
          <ScrollAnimation animateIn="fadeIn">
          <div className="row">
            <div className="col-md-4">
              <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="images/signup.png" />
                <Card.Body>
                  <Card.Title>Sign UP</Card.Title>
                  <Card.Text>Create your account and get started </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="images/blocks.png" />
                <Card.Body>
                  <Card.Title>Build your profile</Card.Title>
                  <Card.Text>Choose what kind of skills you would like to read about</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="images/learn.png" />
                <Card.Body>
                  <Card.Title>Enjoy reading</Card.Title>
                  <Card.Text>Read while the system keeps you posted with blogs</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          </ScrollAnimation>
          <center>
            <br/>
            <h1 className="highlight">It's That Simple</h1>
          </center>
          <hr className="hr_style"/>
          <center>
            <h1 className="normal-font">Go Ahead, <span className="highlight">Create your account now</span></h1>
          </center>
      </div>
      </>
    );
  }
}

export default HomePage;
