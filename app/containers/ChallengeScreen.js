import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import CountDown from 'react-native-countdown-component';
import { resetChallenge } from '../actions';
class ChallengeScreen extends React.Component {
  state = { finished: false, winner: false };
  finishEarly = () => {
    this.setState({ finished: true, winner: true });
  };

  finished = () => {
    this.setState({ finished: true });
  };

  render() {
    const { currentChallenge } = this.props;
    const { finished, finishedEarly, winner } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text> {currentChallenge.title}</Text>
        </View>
        <View style={{ padding: 10 }}>
          {currentChallenge.participants.map((p, index) => {
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
          <CountDown
            until={finished ? 0 : currentChallenge.time * 60}
            onFinish={this.finished}
            size={20}
            timeToShow={['M', 'S']}
          />
        </View>
        {!finished && <Button title="HE'S READY!" onPress={this.finishEarly} />}
        {finished && (
          <View>
            <Text>
              Finished: {finished ? 'Yes' : 'No'} {'\n'} Winner?: {winner ? 'Yes' : 'No'} {'\n'}
            </Text>
            <Button title="New Challenge" onPress={this.props.resetChallenge} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    currentChallenge: state.challenges.currentChallenge,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetChallenge: () => {
      dispatch(resetChallenge());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeScreen);
