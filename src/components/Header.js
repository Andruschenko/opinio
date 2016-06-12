import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
        <Image
          style={styles.icon}
          source={require('./../../data/opinio-button.png')}
        />
      </View>
    );
  }
}

const STICKY_HEADER_HEIGHT = 74;
const GREY = '#3D3934';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F7F4C0',
    height: 80,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    width: 50,
    height: 50,
  },
});
