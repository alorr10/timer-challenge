import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { logout } from '../actions';
import { connect } from 'react-redux';
class ViewChallengeGroups extends Component {
  async componentDidMount() {}

  logout = () => {
    this.props.logout();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> ViewChallengeGroups </Text>
        <Button onPress={this.logout} title={'Logout'} />
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
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewChallengeGroups);
