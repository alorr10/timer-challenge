import { ApolloClient, InMemoryCache, HttpLink, split } from 'apollo-client-preset';
import { getMainDefinition } from 'apollo-utilities';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from 'apollo-link-ws';

const graphqlEndpoint = 'https://timer-challenge.herokuapp.com/server/dev';
const subscriptionEndpoint = 'wss://timer-challenge.herokuapp.com/server/dev';

const wsLink = new WebSocketLink({
  uri: subscriptionEndpoint,
  options: {
    reconnect: true,
  },
});
const httpLink = new HttpLink({ uri: graphqlEndpoint });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

// const cache = new InMemoryCache({
//   dataIdFromObject: object => {
//     switch (object.__typename) {
//       case 'foo':
//         return object.key; // use `key` as the primary key
//       case 'bar':
//         return `bar:${object.blah}`; // use `bar` prefix and `blah` as the primary key
//       default:
//         return defaultDataIdFromObject(object); // fall back to default handling
//     }
//   },
// });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  shouldBatch: true,
});

export default client;
