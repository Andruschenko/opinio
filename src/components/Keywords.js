import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Header from './Header';

import keywords from './../../data/keywords';


export default class Keywords extends Component {

  _renderKeywords = chars => (
      <View style={styles.container}>
        {chars && chars.map(function(char, idx) {
          return (<View key={idx} style={styles.row}>
            <Text style={{fontSize: 20}}>{char['1'] + ', ' + char['2'] + ', ' + char['3']}</Text>
            </View>);
        })}
      </View>
    )

  render() {
    return (
      <View>
        <Header text="Please choose a set" />
          {this._renderKeywords(keywords)}
      </View>
    );
  }
}

const STICKY_HEADER_HEIGHT = 74;
const GREY = '#3D3934';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
  },
});
