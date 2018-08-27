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
  console.log(id, name);
  try {
    const data = await client.query({
      query: userExistsQuery,
      variables: {
        facebookId: id,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export default createOrUpdateUser;
