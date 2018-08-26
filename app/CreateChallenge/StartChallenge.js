import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from '../components/Start';

class StartChallenge extends Component {
  render() {
    return <Start start={this.start} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartChallenge;
