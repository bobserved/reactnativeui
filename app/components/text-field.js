// @flow

import React from 'react'
import {
    View,
    TextInput,
    Dimensions
} from 'react-native'

export const TextField = ({ data, onChangeHandler, returnKeyType }) => (
  <View style={styles.textfieldStyle}>
    {data.icon &&
      <View style={styles.iconContainer}>{data.icon}</View>
    }
    <TextInput
      placeholderTextColor='#ccc'
      style={styles.inputStyle}
      placeholder={data.placeholder}
      onChangeText={(val) => onChangeHandler(val, data.name)}
      secureTextEntry={data.secure}
      returnKeyType={returnKeyType}
      underlineColorAndroid='transparent'
      autoCapitalize='none'
    />
  </View>
)

const deviceWidth = Dimensions.get('window').width
const styles = {
  textfieldStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#59edad',
    marginVertical: 16,
    paddingBottom: 0
  },
  iconContainer: {
    marginRight: 16
  },
  inputStyle: {
    flexGrow: 1,
    height: 48,
    fontSize: 18,
    color: '#000',
    backgroundColor: 'transparent',
    marginBottom: 0
  }
}
