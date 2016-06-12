import React, { Component } from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
} from 'react-native';

import FeedItem from './FeedItem';

import articles from './../../data/articles';

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

  _renderArticles = chars => (
    <View style={styles.container}>
      {chars && chars.map(function(char, idx) {
        return (
          <TouchableOpacity key={idx} style={styles.row}>
            <View>
              <Text style={styles.title}>{char.title}</Text>
              <Text style={styles.subtext}>{char.subtext}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  )

  fetchData() {
    fetch(`${url}/articles`)
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([responseData]),
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
            dataSource: this.state.dataSource.cloneWithRows(articles),
            loaded: true,
          });
        }, 1000);
      });
  }


  _renderRow = (article) => (
    <FeedItem article={article}/>
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
  },
  separator: {
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 20, alignSelf: 'center', color: '#3974b5',
  },
  subtext: {
    fontSize: 14,
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
