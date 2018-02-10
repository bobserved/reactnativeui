// @flow

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Platform,
    StatusBar
} from 'react-native';
import { AppStackNavigator } from './navigators'

const App = _ => (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <AppStackNavigator />
    </View>
)
const styles = {
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  }
}
AppRegistry.registerComponent('reactnativeui', () => App)
