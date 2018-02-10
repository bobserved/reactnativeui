// @flow

import React from 'react'
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Dimensions
} from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const ButtonWithoutFeedback = ({...props, onClickHandler, label, color, textColor }) => (
  <TouchableWithoutFeedback onPress={onClickHandler}>
    <View style={[styles.basicButton, { backgroundColor: color }]}>
      <Text style={[styles.basicButtonLabel, { color: textColor }]}>{label}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = {
  basicButton: {
    width: deviceWidth * 0.8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    borderRadius: 4
  },
  basicButtonLabel: {
    fontSize: 24
  }
}