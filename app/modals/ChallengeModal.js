import React, { Component } from 'react';
import { Text, TouchableHighlight, View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { toggleChallengeContainer, setCurrentChallenge } from '../actions';
import Modal from 'react-native-modalbox';
import Names from '../components/Names';
import Time from '../components/Time';
import Start from '../components/Start';
import _ from 'lodash';

class ChallengeModal extends Component {
  state = {
    title: 'Get Ready On Time',
    step: 'participants',
    participants: [
      {
        __typename: 'User',
        id: 'cjjddjgqx006c0953i54afk3m',
        name: 'Austin Kevitch',
        'Symbol(id)': 'User:cjjddjgqx006c0953i54afk3m',
      },
    ],
    time: 0,
  };

  onSelect = user => {
    if (this.isSelected(user)) {
      const newParticipants = _.filter(this.state.participants, p => p.id !== user.id);
      this.setState({ participants: newParticipants });
    } else {
      this.setState({ participants: [...this.state.participants, user] });
    }
  };

  isSelected = user => _.find(this.state.participants, p => p.id === user.id);

  setTime = time => {
    console.log(time);
    this.setState({ time });
  };

  onClose = () => {
    this.props.toggleChallengeContainer(false);
  };

  navigateTo = step => {
    this.setState({ step });
  };

  start = () => {
    this.props.setCurrentChallenge({
      title: this.state.title,
      participants: this.state.participants,
      time: this.state.time,
    });
    this.props.toggleChallengeContainer(false);
  };
  render() {
    const { challengeContainerIsOpen } = this.props;
    const { title, participants, step, time } = this.state;
    return (
      <Modal
        isOpen={challengeContainerIsOpen}
        style={styles.modalStyle}
        swipeToClose={true}
        disabled={false}
        onClosed={this.onClose}
      >
        {step === 'participants' && (
          <Names
            onSelect={this.onSelect}
            isSelected={this.isSelected}
            navigateTo={this.navigateTo}
          />
        )}
        {step === 'time' && <Time navigateTo={this.navigateTo} setTime={this.setTime} />}
        {step === 'start' && (
          <Start participants={participants} time={time} title={title} start={this.start} />
        )}
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalStyle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    challengeContainerIsOpen: state.nav.challengeContainerIsOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleChallengeContainer: open => {
      dispatch(toggleChallengeContainer(open));
    },
    setCurrentChallenge: challenge => {
      dispatch(setCurrentChallenge(challenge));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeModal);
