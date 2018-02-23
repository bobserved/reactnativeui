// @flow
import React from 'react'
import { Animated, Easing } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'
import {
  Menu,
  Buttons,
  Cards,
  Inputs
} from '../layouts'
import { transitionConfig } from '../helper'

const resetAction = (navigation, options) => {
  const actionsArray = []
  for (let i = 0; i < options.actions.length; i++) {
    actionsArray.push(NavigationActions.navigate({ routeName: options.actions[i], customProps: options.customProps }))
  }
  navigation.dispatch(
    NavigationActions.reset({
      index: options.index, 
      actions: actionsArray
    })
  )
}

export const MainNavigator = StackNavigator({
  Menu: {
    screen: ({ navigation }) => <Menu navigation={navigation} screenProps={{ reset: (options) => resetAction(navigation, options) }} />
  },
  Buttons: { screen: Buttons },
  Cards: { screen: Cards },
  Inputs: { screen: Inputs },
}, {
  headerMode: "none",
  transitionConfig: () => transitionConfig(750, 'opacity', 'opacity')
});
