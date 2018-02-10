// @flow

import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const BasicCard = ({...props, children }) => (
  <View style={styles.basicCard}>
    {children}
  </View>
)

const styles = {
  basicCard: {
    alignSelf: 'stretch',
    padding: 12,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#c52155',
    flexWrap: 'nowrap',
    backgroundColor: '#fafafa',
    shadowColor: "#0c3289",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  }
}