import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesome } from '@expo/vector-icons';
const Names = ({ onSelect, isSelected, navigate }) => (
  <Query
    query={gql`
      {
        users {
          id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        );
      if (error)
        return (
          <View>
            <Text>Error :( {console.log(error)}</Text>
          </View>
        );

      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}> 1. Choose Participants </Text>
          </View>
          <View>
            {data.users.map(user => (
              <TouchableOpacity
                disabled={user.id === 'cjjddjgqx006c0953i54afk3m'}
                style={[styles.nameStyle]}
                key={user.id}
                onPress={() => onSelect(user)}
              >
                {isSelected(user) && <FontAwesome name="check" size={30} color={'green'} />}
                <Text> {user.name} </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Button title="Next" onPress={navigate} />
          </View>
        </View>
      );
    }}
  </Query>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
  },
  nameStyle: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selected: {
    fontSize: 30,
  },
});

export default Names;
