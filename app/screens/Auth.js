import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';

class Auth extends Component {
  componentWillMount() {
    this.checkAuth();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.currentUser);
    if (nextProps.currentUser) {
      this.checkAuth();
    }
  }

  checkAuth() {
    AsyncStorage.getItem('access_token')
    .then(token => {
      if (token) {
        this.props.navigation.navigate('Map');
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Login />
      </View>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

export default connect(
  mapStateToProps,
  null
)(Auth);
