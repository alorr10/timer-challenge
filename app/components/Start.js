import React, { Component } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text> {this.props.title}</Text>
        </View>
        <View style={{ padding: 10 }}>
          {this.props.participants.map((p, index) => {
            return (
              <View key={p.id}>
                <Text>
                  {index + 1}. {p.name}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{ padding: 10 }}>
          <Text> {this.props.time} </Text>
        </View>
        <Button title="Start" onPress={this.props.start} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
});

Start.defaultProps = {
  participants: [
    {
      id: 1,
      name: 'Alec',
    },
    {
      id: 2,
      name: 'Austin',
    },
  ],
  time: '10',
  title: 'Austin Challenge',
};

export default Start;
