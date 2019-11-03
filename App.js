import React from 'react';
import { createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/home/HomeScreen';
import SettingsScreen from './src/settings/SettingsScreen.js';
import InfoScreen from './src/info/InfoScreen';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Info: {
      screen: InfoScreen,
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Home'
  });

const AppContainer = createAppContainer(AppNavigator);

const App = () => { 
  return(
    <Provider store={configureStore()} >
      <AppContainer />
    </Provider>
  );
}

export default App;