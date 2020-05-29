import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Link, Button, Container } from 'react-bootstrap';
import Actions from '../actions/session';

class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.renderSignOutButton = this.renderSignOutButton.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount(){
    this.ensureAuthenticated();
  }


  ensureAuthenticated()
  {
    const { dispatch } = this.props;
    if(!this.props.currentUser && localStorage.getItem('jwtAuthToken')){
      dispatch(Actions.CurrentUser())
    }
  }

  renderSignOutButton(){
    if(!this.props.currentUser){
      return(
        <>
          <Nav.Link href="/sign_up"><span className="navbar-color-font">Sign UP</span></Nav.Link>
          <Nav.Link href="sign_in"><span className="navbar-color-font">Sign in</span></Nav.Link>
        </>
      );
    }
    else{
      return(
        <>
          <Nav.Link><span className="navbar-color-font">{this.props.currentUser.first_name}</span></Nav.Link>
          <Nav.Link href="#" onClick={this.handleSignOut}><span className="navbar-color-font">Sign out</span></Nav.Link>
        </>
      );
    }
  }

  handleSignOut(){
    const { dispatch } = this.props;
    dispatch(Actions.SignOut())
  }


  render(){
    return(
      <Navbar expand="md" sticky="top" bg="light">
        <Container>
        <Navbar.Brand href="#home">
          <Button className="color-home-button" href="/">Reach Your Read</Button>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home"><span className="navbar-color-font">About Us</span></Nav.Link>
          {this.renderSignOutButton()}
        </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps)(NavigationBar);
