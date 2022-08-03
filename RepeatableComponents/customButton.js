import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  textarea,
  Pressable,
} from 'react-native';

const CustomButton = ({onClick, text}) => {
  return (
    <Pressable onPress={onClick} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B71F3',
    alignItems: 'center',
    width: '100%',

    padding: 15,
    marginVertical: 5,

    borderRadius: 5,
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CustomButton;
