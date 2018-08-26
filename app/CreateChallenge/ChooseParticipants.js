import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Names from '../components/Names';
import _ from 'lodash';
import { connect } from 'react-redux';
class ChooseParticipants extends Component {
  state = {
    participants: [
      {
        __typename: 'User',
        id: 'cjjddjgqx006c0953i54afk3m',
        name: 'Austin Kevitch',
        'Symbol(id)': 'User:cjjddjgqx006c0953i54afk3m',
      },
    ],
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

  navigate = () => {
    this.props.navigation.navigate('time');
  };
  render() {
    return <Names onSelect={this.onSelect} isSelected={this.isSelected} navigate={this.navigate} />;
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
    participants: state.nav.challengeContainerIsOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chooseParticipants: names => {
      dispatch(chooseParticipants(names));
    },
  };
};

export default connect(null, null)(ChooseParticipants);
