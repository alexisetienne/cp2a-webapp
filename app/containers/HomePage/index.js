/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import { withKeycloak } from '@react-keycloak/web';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'cp2a-app',
  clientId: 'cp2a-webapp',
});

class Secured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keycloak: null,
      authenticated: false,
    };
  }

  componentDidMount() {
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      this.setState({ keycloak, authenticated });
    });
  }

  render() {
    const onClickUserLogout = () => {
      keycloak.logout({ redirectUri: 'http://localhost:3000' });
    };
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <div>
            {/* <UserInfo keycloak={keycloak} /> */}
            <Navbar logout={onClickUserLogout} />
          </div>
        );
      return <div>Unable to authenticate!</div>;
    }
    return (
      <div>
        <Loader />
      </div>
    );
  }
}
export default withKeycloak(Secured);
