import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions
} from 'react-native'
import {
  BasicCard,
  BasicButton
} from '../components'

export const Cards = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Basic Card</Text>
    <BasicCard
      onClickHandler={() => null}
      label='Click Me'
      color='#59edad'
      textColor='white'
      width='full'
    >
      <Text style={styles.basicCardTitle}>Basic Card Title</Text>
    </BasicCard>
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
  },
  basicCardTitle: {
    fontSize: 18,
    color: '#c52155'
  }
}
