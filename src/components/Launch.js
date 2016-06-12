import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Launch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Please enter your text',
    };
  }

  _onPress = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress}>
          <Image
            style={styles.icon}
            source={require('./../../data/opinio-logo.png')}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const STICKY_HEADER_HEIGHT = 74;
const GREY = '#3D3934';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  textBox: {
    height: 60, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginHorizontal: 30,
    paddingHorizontal: 20,
  },
});
