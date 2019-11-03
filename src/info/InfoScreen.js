import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SweatherMap from '../home/SweatherMap';
import { connect } from 'react-redux';

class InfoScreen extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <View style={{flex: 1}}>
        <SweatherMap 
          flex={.4}
          marker={{
                latitude: this.props.safeLocation.latitude, 
                longitude: this.props.safeLocation.longitude,
                title: 'Reccomended safe location',
                subtitle: 'Consider relocating'}}
        />
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>{`Flood Risk Value: ${this.props.risk}`}</Text>
          <Text style={styles.stat}>{`Safe Zone: (${this.props.safeLocation.latitude}, ${this.props.safeLocation.longitude})`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statsContainer: {
    justifyContent: 'space-around',
    flex: .6
  },
  stat: {
    fontSize: 18,
    textAlign: 'center',

  }

});

const mapStateToProps = state => {
  return {
    risk: state.info.risk,
    safeLocation: state.info.safeLocation
  }
}

export default connect(mapStateToProps)(InfoScreen);