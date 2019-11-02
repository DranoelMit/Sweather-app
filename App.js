import React from 'react';
import { createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/home/HomeScreen'
import SettingsScreen from './src/settings/SettingsScreen.js'
import InfoScreen from './src/info/InfoScreen'

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
  },

);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;