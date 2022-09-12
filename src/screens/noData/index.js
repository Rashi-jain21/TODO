import React from 'react';
import {Pressable, View, StyleSheet, Text} from 'react-native';

export default function NoData(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>No Data</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textColor: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
});
