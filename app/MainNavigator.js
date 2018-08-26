import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ChooseParticipants from './CreateChallenge/ChooseParticipants';
import ChooseTime from './CreateChallenge/ChooseTime';
import StartChallenge from './CreateChallenge/StartChallenge';
import ViewChallenge from './ViewChallenge/ViewChallenge';

const CreateChallengeStack = createStackNavigator({
  participants: ChooseParticipants,
  time: ChooseTime,
  start: StartChallenge,
});

export default createBottomTabNavigator({
  View: ViewChallenge,
  CreateChallenge: CreateChallengeStack,
});
