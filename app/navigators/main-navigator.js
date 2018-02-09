// @flow
import React from 'react'
import { StackNavigator, NavigationActions } from 'react-navigation'
import { Menu } from '../layouts/menu'

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
  }
}, {
  headerMode: "none"
});
