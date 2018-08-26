import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Time from '../components/Time';

class ChooseTime extends Component {
  setTime = time => {
    console.log(time);
    this.setState({ time });
  };

  navigate = () => {
    this.props.navigation.navigate('start');
  };

  render() {
    return <Time navigate={this.navigate} setTime={this.setTime} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChooseTime;
