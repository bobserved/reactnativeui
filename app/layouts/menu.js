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
    this.state = {
      menuItems: [
        {
            id: 0,
            name: 'Buttons',
            route: 'Buttons'
        },
        {
          id: 0,
          name: 'Cards',
          route: 'Cards'
        },
        {
          id: 0,
          name: 'Bobby 3',
          route: 'Buttons'
        }
      ]
    }
  }
  handleListItemPress = (item) => this.props.navigation.navigate(item)
  render() {
    return (
      <View style={styles.container}>
        <BasicList
          data={this.state.menuItems}
          onClickHandler={this.handleListItemPress}
        />
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#59edad'
  }
}
