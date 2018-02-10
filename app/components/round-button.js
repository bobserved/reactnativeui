// @flow

import React from 'react'
import {
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const RoundButton = ({...props, onClickHandler, label, color, textColor }) => (
  <TouchableOpacity
    style={[styles.basicButton, { backgroundColor: color }]}
    onPress={onClickHandler}
  >
    <Text style={[styles.basicButtonLabel, { color: textColor }]}>{label}</Text>
  </TouchableOpacity>
)

const styles = {
  basicButton: {
    width: deviceWidth * 0.15,
    height: deviceWidth * 0.15,
    borderRadius: deviceWidth * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12
  },
  basicButtonLabel: {
    fontSize: 24
  }
}