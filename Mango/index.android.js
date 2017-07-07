/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';

export default class Mango extends Component {
  constructor(){
    super()
    this.state ={
      name:'',
      treeName:''
    }
  }
  render() {
    return (
      <View >
        <Text>
          Welcome to Mango Tree {'\n\n\n'}
        </Text>
        <Text>
          Your Name :
        </Text>
        <TextInput
          style={{height: 35, width:200}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text>
          Give ur Tree Name :{'\n'}
        </Text>
        <TextInput
          style={{height: 35, width:200}}
          onChangeText={(treeName) => this.setState({treeName})}
          value={this.state.treeName}
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('Mango', () => Mango);
