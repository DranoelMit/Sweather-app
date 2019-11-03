const InfoScreen = () => {
  return (
    <View></View>
  );
}
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import SweatherMap from './SweatherMap';
import settingsIcon from '../../assets/settingsIcon.png'

const goTo = (nav, dest) => {
  nav.navigate(dest);
} 

const sendMessage = () => {
  console.log(`Message Sent!`);
}

const HomeScreen = (props) => {
  console.log('called Home');
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => goTo(props.navigation, 'Settings')}
        style={styles.settingsButton}
      >
        <Image source={settingsIcon} style={styles.settingsImg} />
      </TouchableOpacity>
      <Text style={styles.title}> Sweather</Text>
      <SweatherMap />
      <View style={styles.bottom}>
        <TouchableOpacity 
          style={[styles.bottomButton, {backgroundColor: '#3410bb'}]}
          onPress={() => goTo(props.navigation, 'Info')}>
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.bottomButton, {backgroundColor: '#8a8b8c'}]}
          onPress={sendMessage}
          disabled
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    flex: .25,
    marginTop: 20
  },
  settingsButton: {

  },
  settingsImg: {
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '15%',
    flexDirection: 'row', 
  },
  bottomButton: {
    flex: .5,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25
    
  }
});

export default HomeScreen;
