import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Launch extends Component {
  _onPress = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress}>
          <Image
            style={styles.icon}
            source={require('./../../data/opinio-button.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const STICKY_HEADER_HEIGHT = 74;
const GREY = '#3D3934';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  }
});
