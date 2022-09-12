import * as React from 'react';
import {SafeAreaView, View, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TODOList from './src/screens/todoList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddToList from './src/screens/addToList';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <View style={backgroundStyle}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="TODOList"
                component={TODOList}
                options={{headerTitle: 'TODO List'}}
              />
              <Stack.Screen
                name="AddToList"
                component={AddToList}
                options={{headerBackButtonMenuEnabled: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
