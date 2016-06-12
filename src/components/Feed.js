import React, { Component } from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
} from 'react-native';

import FeedItem from './FeedItem';

import news from './../../data/news';

import ProgressBar from 'react-native-progress/Bar';

const url = 'http://46.101.143.63:5000'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${url}/articles`)
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.titles),
          loaded: true,
        });
        console.log('responseData', responseData);
      })
      // .done();
      .catch(error => {
        console.log('error', error);
        // insert mock data
        setTimeout(() => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(news),
            loaded: true,
          });
        }, 3000);
      });
  }


  _renderRow = (headline) => (
    <FeedItem headline={headline.title} />
  )

  _renderSeparator = (sectionID, rowID) => (
    <View
      key={`sep-${sectionID}-${rowID}`}
      style={styles.separator}
    />
  );

  _renderLoadingView() {
    return (
      <View style={styles.container}>
        <ProgressBar
          height={10}
        />
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this._renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        style={styles.listView}
      />
    );
  }
}


const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#F5FCFF',
  },
  separator: {
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
