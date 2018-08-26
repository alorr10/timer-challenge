import React, { Component } from 'react';
import { RNNumberStepper } from 'react-native-number-stepper';
import { StyleSheet, View, Text, Button } from 'react-native';

class Time extends Component {
  state = { time: 10 };

  onChangeTime = time => {
    console.log(time);
    this.setState({ time });
  };

  chooseTime = () => {
    this.props.setTime(this.state.time);
    this.props.navigate();
  };

  render() {
    return (
      <View>
        <Text> Pick a Time </Text>
        <RNNumberStepper value={this.state.time} maxValue={30} onChange={this.onChangeTime} />
        <Button title="Choose" onPress={this.chooseTime} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Time;
