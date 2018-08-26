import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

class ViewChallenge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ViewChallenge </Text>
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

export default ViewChallenge;
