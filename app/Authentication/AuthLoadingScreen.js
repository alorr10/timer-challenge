import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, Text } from 'react-native';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.authenticateUser();
  }

  authenticateUser = () => {
    if (this.props.token) this.props.navigation.navigate('App');
    else {
      this.props.navigation.navigate('Auth');
    }
  };
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(login());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
