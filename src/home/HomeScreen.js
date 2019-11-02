import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SweatherMap from './SweatherMap';

const HomeScreen = () => {
  console.log('called Home');
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}> Sweather</Text>
      <SweatherMap />
    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    flex: .25,
    marginTop: 80
  }
});

export default HomeScreen;