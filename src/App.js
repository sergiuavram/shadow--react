import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { chekLocalStorage } from './redux/user/user.actions';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/login/login.component';
import Signup from './pages/signup/signup.component';
import History from './pages/history/history.component';
import Welcome from './pages/welcome/welcome.component';
import Profile from './pages/profile/profile.component';
import SessionPage from './pages/session-page/session-page.component';
import CreateRoute from './pages/create-route/create-route.component';
import Error from './pages/404/error.component';
import Logout from './pages/logout/logout.component';

const App = ({ chekLocalStorage, user }) => {

  useEffect(() => {
    chekLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Welcome />} />
        <Route exact path='/history/' render={() => <History />} />
        <Route exact path='/profile/' render={() => <Profile />} />
        <Route exact path='/session/' render={() => <SessionPage />} />
        <Route exact path='/create-route/' render={() => <CreateRoute />} />
        <Route exact path='/login' render={() => <Login />} />
        <Route exact path='/signup' render={() => <Signup />} />
        <Route exact path='/logout' render={() => <Logout />} />
        <Route path='*' render={() => <Error />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = (dispatch) => ({
  chekLocalStorage: () => dispatch(chekLocalStorage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
