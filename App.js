import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { StyleSheet, Text, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import ChallengeContainer from './app/containers/ChallengeContainer';
import client from './app/client';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <ChallengeContainer />
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}

/*

return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChallengeContainer />
        </PersistGate>
      </Provider>
    );
    */
