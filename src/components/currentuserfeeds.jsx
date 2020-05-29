import React from 'react';
import Actions from '../actions/session';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

class CurrentUserFeeds extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.ensureAuthenticated();
    console.log(this.props.currentUser)
  }

  ensureAuthenticated(){
    const { dispatch } = this.props;

    if(!this.props.currentUser && localStorage.getItem('jwtAuthToken'))
      dispatch(Actions.CurrentUser())

  }

  renderName(){
      if(!this.props.currentUser)
        return false;
      return(
        <span>{this.props.currentUser.first_name}</span>
      )
  }

  renderRecommendations(){
    if(!this.props.currentUser)
      return false;
    const recommendations = this.props.currentUser.recommendations
    const render_list = recommendations.map((readingRecommendation) =>
      <li>{readingRecommendation}</li>
    );

    return(
      <ul>{render_list}</ul>
    );

  }



  render(){
    return(
      <div className="container normal-font">
        <h1>Hi {this.renderName()}</h1>
        <div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
})

export default connect(mapStateToProps)(CurrentUserFeeds);
