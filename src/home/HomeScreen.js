import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import SweatherMap from './SweatherMap';
import settingsIcon from '../../assets/settingsIcon.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeInfo } from '../actions/infoActions'

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sendDisabled: true
    }
  }

  componentWillMount(){
    axios.get(`http://35.202.52.207:8002/Sweather`,
    {
      params: {
        long: this.props.map.region.longitude,
        lat: this.props.map.region.latitude,
        numToFind: 1,
        anticipWaterLevel: 20,
        threshDiv: 20
      }
    }).then(res => this.props.changeInfo({
        risk: res.data[0][0][3],
        safeLocation: {
          latitude: res.data[0][0][0][1],
          longitude: res.data[0][0][0][0]
        }}))
      .catch(error => console.log(error));


    if(this.props.info.risk >= 5){
      this.setState({sendDisabled: false});
    }

  }

  goTo(nav, dest){
    nav.navigate(dest);
  } 
  
  sendMessage(contacts, info){
    axios.post('https://sweather-messaging-api.mybluemix.net/api/message',
    {
      contacts: contacts,
      info: info,
      author: this.props.author
    });
    this.setState({sendDisabled: true});
  }  

  render(){
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => this.goTo(this.props.navigation, 'Settings')}
          style={styles.settingsButton}
        >
          <Image source={settingsIcon} style={styles.settingsImg} />
        </TouchableOpacity>
        <Text style={styles.title}> Sweather</Text>
        <SweatherMap 
          flex={.6}
        />
        <Text style={styles.risk}>{(this.props.info.risk >= 0) ? `Risk: ${this.props.info.risk}/5` : ''}</Text>
        <View style={styles.bottom}>
          <TouchableOpacity 
            style={[styles.bottomButton, {backgroundColor: '#3410bb'}]}
            onPress={() => this.goTo(this.props.navigation, 'Info')}>
            <Text style={styles.buttonText}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.bottomButton, {backgroundColor: (this.state.sendDisabled) ? '#cbcbcb' : '#3295bc'}]}
            onPress={() => this.sendMessage(this.props.contacts, this.props.info)}
            disabled={this.state.sendDisabled}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',

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
    
  }, 
  risk: {
    flex: .1,
    fontSize: 20,
    height: '10%'
  }
});

const mapStateToProps = state => {
  return {
      contacts: state.settings.contacts,
      author: state.settings.author,
      info: state.info,
      map: state.map
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changeInfo: (info) => {
      dispatch(changeInfo(info));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
