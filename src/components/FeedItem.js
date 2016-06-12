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
  static propTypes = {
    headline: PropTypes.string,
  };
  static defaultsProps = {
    headline: 'This is the headline',
  };

  _onPress = item => {
    console.log('item', item);
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.headline}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7E662',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
});
