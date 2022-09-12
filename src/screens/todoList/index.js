import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/button';
import NoData from '../noData';
import Icon from 'react-native-vector-icons/AntDesign';
import {DELETE_FROM_LIST, EDIT_ITEM_IN_LIST} from '../../redux/actions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TODOList(props) {
  const todoList = useSelector(state => state.todos);
  const renderItem = ({item}) => {
    return <ListComponent item={item} />;
  };
  return (
    <View style={{flex: 1, justifyContent: 'space-evenly', paddingTop: 70}}>
      <View style={styles.divider} />
      {todoList.length ? (
        <FlatList
          data={todoList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <NoData />
      )}
      <Button
        title={'Add'}
        containerStyles={styles.button}
        onPress={() => {
          props.navigation.navigate('AddToList');
        }}
      />
    </View>
  );
}

const ListComponent = props => {
  const {item} = props;
  const dispatch = useDispatch();
  const onChangeStatus = status => {
    dispatch({
      type: EDIT_ITEM_IN_LIST,
      payload: {newItem: {...item, status: status}},
    });
  };
  const onDeletePress = () => {
    dispatch({
      type: DELETE_FROM_LIST,
      payload: {id: item.id},
    });
  };
  return (
    <View style={styles.item}>
      {item.status === 'complete' ? (
        <Pressable
          onPress={e => {
            e.stopPropagation();
            onChangeStatus('incomplete');
          }}>
          <Icon name="checkcircle" size={20} color="green" />
        </Pressable>
      ) : (
        <Pressable
          onPress={e => {
            e.stopPropagation();
            onChangeStatus('complete');
          }}>
          <Icon name="checkcircleo" size={20} color="red" />
        </Pressable>
      )}
      <Text style={styles.todoText}>{item?.name}</Text>
      <Pressable style={styles.deleteIcon} onPress={onDeletePress}>
        <MaterialIcons name="cancel" size={20} color="#900" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#8c8eab',
  },
  item: {
    borderColor: '#8c8eab',
    borderBottomWidth: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  todoText: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 10,
    alignSelf: 'center',
  },
  deleteIcon: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
});
