import client from '../../client';
import gql from 'graphql-tag';

// const userExistsQuery = gql`
//   query($facebookId: String!) {
//     userExists(facebookId: $facebookId) {
//       name
//       id
//     }
//   }
// `;

const userExistsQuery = gql`
  query($facebookId: String!) {
    users(where: { facebookId_contains: $facebookId }) {
      name
      id
    }
  }
`;

const createOrUpdateUser = async (id, name) => {
  try {
    const { data: { users } } = await client.query({
      query: userExistsQuery,
      variables: {
        facebookId: id,
      },
    });
    console.log(users);
    if (!users.length) {
      createUser(id, name);
    }
  } catch (error) {
    console.log(error);
  }
};

const createUserMutation = gql`
  mutation($name: String!, $facebookId: String!) {
    createUser(data: { name: $name, facebookId: $facebookId }) {
      name
      id
    }
  }
`;

const createUser = async (id, name) => {
  console.log('here');
  try {
    const data = await client.mutate({
      mutation: createUserMutation,
      variables: {
        name,
        facebookId: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export default createOrUpdateUser;
