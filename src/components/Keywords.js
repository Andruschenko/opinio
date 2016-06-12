import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Header from './Header';

import keywords from './../../data/keywords';


export default class Keywords extends Component {

  _renderKeywords = chars => (
      <View style={styles.container}>
        {chars && chars.map(function(char, idx) {
          return (
            <TouchableOpacity key={idx} style={styles.row}>
              <View>
                <Text style={{fontSize: 20, alignSelf: 'center', color: '#3974b5'}}>{char['1'] + ', ' + char['2'] + ', ' + char['3']}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
  )

  render() {
    return (
      <View>
        <Header text="Opinio" />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#b8d7f4',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopColor: 'white',
    borderTopWidth: 2,
  },
});
