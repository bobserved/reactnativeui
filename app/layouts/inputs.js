// @flow

import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import {
  TextField
} from '../components'

export const Inputs = (props) => (
  <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }} contentContainerStyle={styles.container}>
    <Text style={styles.title}>Basic Text Field</Text>
    <TextField
      data={{
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        icon: null,
        secure: false
      }}
      onChangeHandler={() => null}
      returnKeyType='done'
    />
  </ScrollView>
)

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 24,
    marginBottom: 12
  },
  cardTitle: {
    fontSize: 18,
    color: '#c52155'
  }
}
