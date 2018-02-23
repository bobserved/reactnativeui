import React from 'react'
import {
  Keyboard,
  Animated,
  Easing
} from 'react-native'
import { TRANSITIONS } from '../constants'

const dismissKeyboard = () => (
  Keyboard.dismiss()
)

const getTransitions = (position, thisSceneIndex, width) => ({
  translateX: position.interpolate({
    inputRange: [thisSceneIndex - 1, thisSceneIndex],
    outputRange: [width, 0]
  }),
  opacity: position.interpolate({
    inputRange: [thisSceneIndex - 1, thisSceneIndex],
    outputRange: [0, 1],
  })
})

const getTransformObj = (value, transitionTypes) => {
  const obj = {}
  obj[value] = transitionTypes[value]
  return obj
}

const transitionConfig = (duration, property, value) => {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const thisSceneIndex = scene.index
      const width = layout.initWidth
      const transitionTypes = getTransitions(position, thisSceneIndex, width)
      const transition = {}
      
      transition[property] = property === TRANSITIONS.TRANSFORM ? [getTransformObj(value, transitionTypes)] : transitionTypes[value]

      return transition
    }
  }
}

export {
  dismissKeyboard,
  transitionConfig
}