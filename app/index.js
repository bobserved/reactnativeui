// @flow

import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import { AppStackNavigator } from './navigators'

const App = _ => (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
        <AppStackNavigator />
    </View>
)
AppRegistry.registerComponent('reactnativeui', () => App)
