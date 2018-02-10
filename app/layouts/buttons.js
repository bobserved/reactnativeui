import React, { Component } from 'react'
import {
  View,
  Dimensions
} from 'react-native'
import { BasicButton } from '../components'

const { height } = Dimensions.get('window')

export const Buttons = (props) => (
  <View style={styles.container}>
    <BasicButton
      onClickHandler={() => null}
      label='Button'
      color='rebeccapurple'
      textColor='white'
    />
  </View>
)
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue'
  }
}
