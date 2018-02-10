// @flow

import React from 'react'
import {
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const BasicButton = ({...props, onClickHandler, label, color, textColor }) => (
  <TouchableOpacity
    style={[styles.basicButton, { backgroundColor: color }]}
    onPress={onClickHandler}
  >
    <Text style={[styles.basicButtonLabel, { color: textColor }]}>{label}</Text>
  </TouchableOpacity>
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