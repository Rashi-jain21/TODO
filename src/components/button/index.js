import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export default function CustomButton(props) {
  const {containerStyles, title, color, navigation, onPress} = props;

  return (
    <View style={{...styles.container, ...containerStyles}}>
      <Button onPress={onPress} title={title} color={color ?? 'white'} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#4290f5',
  },
});
