// @flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View, Animated, Easing } from 'react-native'

import { MainNavigator } from './main-navigator'

export const AppStackNavigator = (props) => {
  // If the store hasn't been added yet, then return null
  // if(!props.app.loaded) return null
  let Navigator = StackNavigator({
    Main: { screen: MainNavigator }
  }, {
    headerMode: "none",
    initialRouteName: "Main"
  })

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF' }}>
      <Navigator />
    </View>
  )
}
