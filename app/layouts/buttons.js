import React, { Component } from 'react'
import {
  View,
  Dimensions
} from 'react-native'
import {
  BasicButton,
  ButtonWithoutFeedback
} from '../components'

const { height } = Dimensions.get('window')

export const Buttons = (props) => (
  <View style={styles.container}>
    <BasicButton
      onClickHandler={() => null}
      label='Basic'
      color='#59edad'
      textColor='white'
    />
    <ButtonWithoutFeedback
      onClickHandler={() => null}
      label='Without Feedback'
      color='#c52155'
      textColor='white'
    />
  </View>
)
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
}
