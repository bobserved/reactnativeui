import React, { Component } from 'react'
import {
  View,
  Dimensions
} from 'react-native'
import { BasicList } from '../components'

const { height } = Dimensions.get('window')

export class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <BasicList />
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
}
