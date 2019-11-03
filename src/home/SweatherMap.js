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
      ready: false,
      marker: this.props.marker
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
      return {flex: this.props.flex, opacity: 1}
    }
    else return {flex: this.props.flex, opacity: 0}
  }

  render(){
    if (typeof this.state.marker !== 'undefined'){
    return (
      <MapView style={styles.container}
          style={this.mapStyle()}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChange.bind(this)}
          showsUserLocation={true}
          followsUserLocation={true}
      >
      <MapView.Marker 
          coordinate={{latitude: this.props.marker.latitude, longitude: this.props.marker.longitude}}
          title={this.props.marker.title}
          description={this.props.marker.subtitle}
      />
      </MapView>
    );
    }
    else return (      
      <MapView 
      style={styles.container}
      style={this.mapStyle()}
      region={this.state.region}
      onRegionChangeComplete={this.onRegionChange.bind(this)}
      showsUserLocation={true}
      followsUserLocation={true}
     />
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