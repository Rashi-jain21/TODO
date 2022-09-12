import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default function CustomTextInput(props) {
  const {
    containerStyles,
    onChangeText,
    text,
    placeholder,
    keyboardType,
    inputStyles,
    maxLength,
  } = props;

  return (
    <View style={{...styles.container, ...containerStyles}}>
      <TextInput
        style={{...styles.input, ...inputStyles}}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboardType ?? 'default'}
        maxLength={maxLength ?? 50}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 40,
    width: '90%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: '#4290f5',
    borderWidth: 1,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
