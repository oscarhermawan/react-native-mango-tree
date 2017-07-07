/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { HalamanUtama, Tree } from './components'
import { StackNavigator } from 'react-navigation';


// import { Provider } from 'react-redux'
// import store from './store/configureStore'

const NavigatorHome = StackNavigator({
  Home: { screen: HalamanUtama},
  Tree:{screen:Tree }
});

export default class Mango extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      // <Provider store={store}>
        <NavigatorHome />
      // </Provider>
    );
  }
}



AppRegistry.registerComponent('Mango', () => Mango);
