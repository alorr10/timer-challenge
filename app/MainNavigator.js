import React from 'react';
import { Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import ChooseParticipants from './CreateChallenge/ChooseParticipants';
import ChooseTime from './CreateChallenge/ChooseTime';
import StartChallenge from './CreateChallenge/StartChallenge';
import ViewChallengeGroups from './ViewChallenge/ViewChallengeGroups';
import LoginScreen from './Authentication/LoginScreen';
import AuthLoadingScreen from './Authentication/AuthLoadingScreen';

const AuthStack = createStackNavigator({ Login: LoginScreen });

const CreateChallengeStack = createStackNavigator({
  participants: ChooseParticipants,
  time: ChooseTime,
  start: StartChallenge,
});

const AppStack = createBottomTabNavigator({
  View: ViewChallengeGroups,
  CreateChallenge: CreateChallengeStack,
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
