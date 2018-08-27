import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';
import { login } from '../actions';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.token && this.props.token) {
      this.props.navigation.navigate('App');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.props.login} title="Login" />
      </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
