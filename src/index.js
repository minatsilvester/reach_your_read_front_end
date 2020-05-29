import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Link } from 'react-router-dom';
import configureStore, { history } from './store';
import NavigationBar from './components/navbar';
import HomePage from './components/homepage';
import UpdateProfile from './forms/updateprofile';
import Registration from './forms/registration';
import CurrentUserFeeds from './components/currentuserfeeds';
import SignIn from './forms/signin';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainApp extends React.Component{
  render(){
    return(
        <Provider store={configureStore()}>
          <NavigationBar />
          <ConnectedRouter history={history} >
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sign_up" component={Registration} />
            <Route exact path="/sign_in" component={SignIn} />
            <Route exact path="/update_profile" component={UpdateProfile} />
            <Route exact path="/feeds" component={CurrentUserFeeds} />
          </ConnectedRouter>
        </Provider>
    );
  }
}


ReactDOM.render(<MainApp />, document.getElementById('root'))
