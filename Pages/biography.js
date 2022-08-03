import React, {useState, useEffect} from 'react';
import {View, Text, Button, Pressable, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

const Bio = ({navigation}) => {
  const route = useRoute();

  const username = route.params.username;
  const firstName = route.params.firstName;
  const lastName = route.params.lastName;
  const bio = route.params.bio;

  return (
    <View style={styles.container}>
      <View style={styles.idBlock}>
        <View style={styles.profileBlock}>
          <Image
            style={styles.profilePicture}
            source={require('../Images/accounticon.png')}
          />
        </View>

        <View style={styles.bottomPart}>
          <View style={styles.identity}>
            <Text style={styles.usernameText}>{username}</Text>
            <Text style={styles.fullNameText}>
              {firstName} {lastName}
            </Text>
          </View>
        </View>
        <View style={styles.bioBox}>
          <Text style={styles.bioText}>{bio}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  idBlock: {
    marginTop: 25,
    width: '85%',
    backgroundColor: 'white',
    borderRightColor: 'black',
    borderRightWidth: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 10,
    borderRadius: 5,
    paddingHorizontal: 25,
  },
  usernameText: {
    fontSize: 40,
    marginTop: 25,
    color: 'black',
  },
  profileBlock: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginTop: 20,
  },
  fullNameText: {
    fontSize: 20,
  },
  bottomPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowbutton: {
    height: 30,
    width: 30,
  },
  bioText: {
    fontSize: 15,
  },
  bioBox: {
    marginTop: 25,
    borderTopColor: 'gray',
    borderTopWidth: 3,
    borderStyle: 'dashed',
    borderTopRadius: 1,
    paddingVertical: 10,
  },
});

export default Bio;
