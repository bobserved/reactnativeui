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
    const { item } = this.props
    return (
      <TouchableOpacity onPress={() => this.props.onClickHandler(item.route)} activeOpacity={0.7}>
        <View style={styles.basicListItem}>
          <Text style={styles.basicListItemText}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export class BasicList extends React.Component {
  state = {}
  _keyExtractor = (item, index) => index.toString()
  _renderItem =({ item }) => (
    <BasicListItem item={item} onClickHandler={this.props.onClickHandler} />
  )
  _renderSeparator = () => (
    <View style={styles.basicListSeparator} />
  )
  render() {
    return (
      <FlatList
        contentContainerStyle={styles.basicList}
        data={this.props.data}
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