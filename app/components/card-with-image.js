// @flow

import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from 'react-native'


export const CardWithImage = ({...props, title, uri }) => (
  <View style={styles.cardWithImage}>
    {title &&
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{title}</Text>
      </View>
    }
    <Image
      source={{ uri }}
      style={styles.cardImage}
      />
  </View>
)

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const styles = {
  cardWithImage: {
    alignSelf: 'stretch',
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#d3eff1',
    flexWrap: 'nowrap',
    backgroundColor: '#fafafa',
    shadowColor: "#0c3289",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  },
  cardHeader: {
    flexGrow: 1,
    height: 32,
    justifyContent: 'center',
    marginBottom: 12
  },
  title: {
    fontSize: 18,
    color: '#c52155'
  },
  cardImage: {
    alignSelf: 'stretch',
    height: deviceHeight * 0.3,
    resizeMode: 'cover'
  }
}