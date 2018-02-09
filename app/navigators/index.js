// @flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native'

import { MainNavigator } from './main-navigator'

export const AppStackNavigator = (props) => {
  // If the store hasn't been added yet, then return null
  // if(!props.app.loaded) return null
  let Navigator = StackNavigator({
    Main: { screen: MainNavigator }
  }, {
    headerMode: "none",
    transitionConfig: _ => ({
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [layout.initWidth, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
          outputRange: [0, 1, 1, 0.3, 0]
        });

        return { opacity, transform: [{ translateX }] }
      }
    }),
    initialRouteName: "Main"
  })

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF' }}>
      <Navigator />
    </View>
  )
}
