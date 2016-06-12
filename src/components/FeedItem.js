import React,
{
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class FeedItem extends Component {

  _onPress = item => {
    console.log('item', item);
  }


  bColor = () => {
    console.log('prop', this.props.article.sentiment);
    if (this.props.article.sentiment === 'positive') {
      return '#BBED90';
    }
    else if (this.props.article.sentiment === 'neutral') {
      return '#9FD6EA';
    }
    else {
      return '#F4AB86';
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={[styles.row, { backgroundColor: this.bColor()} ]}>
          <Text style={styles.title}>{this.props.article.title}</Text>
          <Text style={styles.subtext}>{this.props.article.subtext}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E662',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20, alignSelf: 'center',
  },
  subtext: {
    fontSize: 14,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  row: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#b8d7f4',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopColor: 'white',
    borderTopWidth: 2,
  },
});
