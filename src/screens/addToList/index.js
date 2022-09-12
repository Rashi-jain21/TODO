import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomTextInput from '../../components/textInput';
import {ADD_TO_LIST} from '../../redux/actions';
import Button from '../../components/button';

export default function AddToList(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const onAddTODO = () => {
    const id = new Date().valueOf();
    dispatch({
      type: ADD_TO_LIST,
      payload: {name, status: 'incomplete', id},
    });
    props.navigation.goBack();
  };
  useEffect(() => {
    return () => {
      setName('');
    };
  }, []);
  return (
    <View style={styles.container}>
      <CustomTextInput
        text={name}
        onChangeText={setName}
        placeholder="enter text"
      />
      <Button title={'Done'} onPress={onAddTODO} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
