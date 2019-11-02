import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import  { createStackNavigator, createAppContainer } from 'react-navigation';

const HomeScreen = () => {
  console.log('called Home');
  return (
    <View style={styles.container}>
      <Text style={styles.homeTxt}>{"Hi from the Home Screen!"}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a16666",
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  homeTxt: {
    flex: 1,
    color: '#000000'
  }
});

export default HomeScreen;