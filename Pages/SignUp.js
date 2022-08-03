import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  textarea,
  placeholder,
  setValue,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import {FlipInEasyX} from 'react-native-reanimated';
import {withStyleAnimation} from 'react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation.js';
import {withOrientation} from 'react-navigation';
import Home from './Home.js';
import NewInput from '../RepeatableComponents/input';
import CustomButton from '../RepeatableComponents/customButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPassword, setCheckPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(true);
  const [bio, setBio] = React.useState('');
  const [passWrong, setPassWrong] = React.useState(0);

  function buttonClick() {
    if (checkPassword == password) {
      navigation.navigate('Home', {username, firstName, lastName, bio});
    } else {
      alert('Password entries do not match');
      setPassWrong(passWrong + 1);
    }
  }

  function showPasswordClick() {
    if (showPassword == true) {
      setShowPassword(!showPassword);
    } else if (showPassword == false) {
      setShowPassword(!showPassword);
    }
  }

  useEffect(() => {
    console.log("You've entered different passwords " + {passWrong} + 'times!');
  }, [passWrong]);

  return (
    <ScrollView>
      <View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Sign Up Here</Text>
          <Text style={styles.nameText}>
            {firstName} {lastName}
          </Text>
        </View>
        {/*Full name input*/}
        <View style={(styles.fullName, styles.fullInput)}>
          <TextInput
            style={styles.nameInput}
            placeholder="First Name"
            onChangeText={firstName => setFirstName(firstName)}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Last Name"
            onChangeText={lastName => setLastName(lastName)}
          />
        </View>
        {/*Username Input*/}
        <View style={styles.fullInput}>
          <Image
            style={styles.iconImage}
            source={require('../Images/accounticon.png')}
          />
          <NewInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
        </View>
        {/*First password input*/}
        <View style={styles.fullInput}>
          <Image
            style={styles.iconImage}
            source={require('../Images/password.png')}
          />
          <NewInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            hideText={showPassword}
          />
        </View>
        {/*Re-enter Password*/}
        <View style={styles.fullInputException}>
          <Image
            style={styles.iconImage}
            source={require('../Images/password.png')}
          />
          <NewInput
            placeholder="Re-Enter Password"
            value={checkPassword}
            setValue={setCheckPassword}
            hideText={showPassword}
          />
        </View>
        {/* Show password button */}
        <View
          style={styles.showPassword}
          onStartShouldSetResponder={() => showPasswordClick()}>
          <Image
            source={require('../Images/showpassword.png')}
            style={styles.showPasswordImage}
          />
          <Text>Show Password</Text>
        </View>
        {/*Biography*/}
        <View style={styles.fullInput}>
          <Image
            style={styles.iconImage}
            source={require('../Images/biography.png')}
          />
          <TextInput
            placeholder="About Yourself"
            onChangeText={bio => setBio(bio)}
            style={styles.bioStyle}
          />
        </View>
        <CustomButton text="Sign Up" onClick={() => buttonClick()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: 'linear-gradient(#2093c3, #fff)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  title: {},
  titleText: {
    fontSize: 30,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 25,
  },
  nameText: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 30,
  },
  fullInput: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 3,
    paddingVertical: 5,
    marginBottom: 10,
  },
  fullInputException: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 3,
    paddingVertical: 5,
    marginBottom: 5,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  showPassword: {
    color: 'gray',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginTop: 0,
  },
  showPasswordImage: {
    height: 20,
    width: 20,
    paddingRight: 15,
  },
  fullName: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  nameInput: {
    width: '35%',
    backgroundColor: 'white',
    marginHorizontal: 25,
  },
  bioStyle: {
    height: 200,
  },
});

function passwordLength(password) {
  if (nchar(password) > 7) {
    return true;
  } else {
    return false;
  }
}

export default SignIn;
