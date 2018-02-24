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

const getTransitions = (position, thisSceneIndex, width, height) => ({
  translateX: position.interpolate({
    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
    outputRange: [width, 0, 0]
  }),
  translateY: position.interpolate({
    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
    outputRange: [height, 0, 0]
  }),
  opacity: position.interpolate({
    inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
    outputRange: [0, 1, 1],
  })
})

const getTransformObj = (transitionType, transitionTypes) => {
  const obj = {}
  obj[transitionType] = transitionTypes[transitionType]
  return obj
}

const customTransitionConfig = (duration, property, transitionType) => {
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
      const height = layout.initHeight
      const transitionTypes = getTransitions(position, thisSceneIndex, width, height)
      const transforms = []
      const transition = {}
      
      for(let i = 0; i < property.length; i++) {
        if (property[i] === TRANSITIONS.TRANSFORM) {
          transforms.push(getTransformObj(transitionType[i], transitionTypes))
          transition[TRANSITIONS.TRANSFORM] = transforms
        } else {
          transition[property[i]] = transitionTypes[transitionType[i]]
        }
      }

      return transition
    }
  }
}

export {
  dismissKeyboard,
  customTransitionConfig
}