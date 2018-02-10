import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions
} from 'react-native'
import {
  BasicButton,
  ButtonWithoutFeedback,
  RoundButton
} from '../components'

export const Buttons = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Basic Button – Full Width</Text>
    <BasicButton
      onClickHandler={() => null}
      label='Click Me'
      color='#59edad'
      textColor='white'
      width='full'
    />
    <Text style={styles.title}>Button Without Feedback – Full Width</Text>
    <ButtonWithoutFeedback
      onClickHandler={() => null}
      label='Click Me'
      color='#c52155'
      textColor='white'
      width='full'
    />
    <Text style={styles.title}>Round Button</Text>
    <RoundButton
      onClickHandler={() => null}
      label='?'
      color='#59edad'
      textColor='white'
      width='full'
    />
    <Text style={styles.title}>Buttons – Auto Width</Text>
    <View style={styles.rowContainer}>
      <BasicButton
        onClickHandler={() => null}
        label='Click Me'
        color='#59edad'
        textColor='white'
        width='auto'
      />
      <ButtonWithoutFeedback
        onClickHandler={() => null}
        label='Click Me'
        color='#c52155'
        textColor='white'
        width='auto'
      />
    </View>
    <View style={styles.rowContainer}>
      <ButtonWithoutFeedback
        onClickHandler={() => null}
        label='Click Me'
        color='#c52155'
        textColor='white'
        width='auto'
      />
      <BasicButton
        onClickHandler={() => null}
        label='Click Me'
        color='#59edad'
        textColor='white'
        width='auto'
        />
      <BasicButton
        onClickHandler={() => null}
        label='Click Me'
        color='#c52155'
        textColor='white'
        width='auto'
      />
    </View>
  </View>
)

const deviceWidth = Dimensions.get('window').width
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20
  },
  rowContainer: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    marginTop: 12
  }
}
