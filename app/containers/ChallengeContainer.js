import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ChallengeModal from '../modals/ChallengeModal';
import { connect } from 'react-redux';
import { toggleChallengeContainer } from '../actions';
import ChallengeScreen from '../containers/ChallengeScreen';
import _ from 'lodash';

class ChallengeContainer extends React.Component {
  render() {
    const { toggleChallengeContainer, challengeContainerIsOpen, currentChallenge } = this.props;
    return (
      <View style={styles.container}>
        {_.isEmpty(currentChallenge) && (
          <View>
            <Button title="Create Challenge" onPress={() => toggleChallengeContainer(true)} />
          </View>
        )}
        {!_.isEmpty(currentChallenge) && <ChallengeScreen />}
        <ChallengeModal />
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
    challengeContainerIsOpen: state.nav.challengeContainerIsOpen,
    currentChallenge: state.challenges.currentChallenge,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleChallengeContainer: open => {
      dispatch(toggleChallengeContainer(open));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
