import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Header from './components/Header';
import Feed from './components/Feed';
import Launch from './components/Launch';
import Keywords from './components/Keywords';

export default class App extends Component {
  render() {
    return (
      <ScrollableTabView>
        <Launch tabLabel="Launch" />
        <Keywords tabLabel="Keywords" />
        <View style={{flex: 1}} tabLabel="Feed">
          <Header />
          <Feed />
        </View>
      </ScrollableTabView>
    );
  }
}
