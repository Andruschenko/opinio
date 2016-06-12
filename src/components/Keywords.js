import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Keywords extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>opinio</Text>
      </View>
    );
  }
}

const STICKY_HEADER_HEIGHT = 74;
const GREY = '#3D3934';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GREY,
    height: 80,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  }
});
