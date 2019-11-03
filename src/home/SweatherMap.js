import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

class SweatherMap extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      region: null,
      altitude: -1, 
      ready: false
    }
  }

  setRegion(lat, long, alt){
    this.setState({ 
      region: {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      altitude: alt,
      ready: true
    });
    this.props.changeLocation({alt: this.state.altitude, region: this.state.region});
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('User Position', position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const altitude = position.coords.altitude;
        this.setRegion(latitude, longitude, altitude);
      }
    )

  }

  onRegionChange(region) {
    this.setState({ region });
  }

  mapStyle(){
    if(this.state.ready){
      return {flex: .6, opacity: 1}
    }
    else return {flex: .6, opacity: 0}
  }

  render(){
    console.log('called SweatherMap');
    return (
      <View style={styles.container}>
        <MapView
          style={this.mapStyle()}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChange.bind(this)}
          showsUserLocation={true}
          followsUserLocation={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   height: '100%',
 },

});


const mapDispatchToProps = dispatch => {
  return {
    changeLocation: (location) => {
      dispatch(changeLocation(location));
    }
  }
}

export default connect(null, mapDispatchToProps)(SweatherMap);