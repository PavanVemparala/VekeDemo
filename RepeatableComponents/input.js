import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  textarea,
  Image,
} from 'react-native';
import {withStyleAnimation} from 'react-native-reanimated/lib/types/lib/reanimated2/animation';

const NewInput = ({placeholder, value, setValue, hideText, imgSrc}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={value => setValue(value)}
        secureTextEntry={hideText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 25,
  },
  inputStyle: {
    padding: 10,
    width: 250,
  },
});

export default NewInput;
