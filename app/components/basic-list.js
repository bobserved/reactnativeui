// @flow

import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native'

class BasicListItem extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={() => null} activeOpacity={0.7}>
        <View style={styles.basicListItem}>
          <Text style={styles.basicListItemText}>
            {this.props.item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export class BasicList extends React.Component {
  state = {
    data: [
      {
          id: 0,
          name: 'Bobby 1'
      },
      {
        id: 0,
        name: 'Bobby 2'
      },
      {
        id: 0,
        name: 'Bobby 3'
      }
    ]
  }
  _keyExtractor = (item, index) => index.toString()
  _renderItem =({ item }) => (
    <BasicListItem item={item} />
  )
  _renderSeparator = () => (
    <View style={styles.basicListSeparator} />
  )
  render() {
    return (
      <FlatList
        contentContainerStyle={styles.basicList}
        data={this.state.data}
        onEndReached={() => console.log('hej')}
        onEndReachedThreshold={50}
        getItemLayout={(data, index) => (
          {length: 40, offset: 40 * index, index}
        )}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
      />
    )
  }
}

const deviceWidth = Dimensions.get('window').width
const styles = {
  basicList: {
    alignItems: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  basicListItem: {
    width: deviceWidth * 0.8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderBottomWidth: 0
  },
  basicListItemText: {
    color: 'black',
    fontSize: 24
  },
  basicListSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  }
}