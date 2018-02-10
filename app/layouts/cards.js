// @flow

import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import {
  BasicCard,
  CardWithImage,
  BasicButton
} from '../components'

export const Cards = (props) => (
  <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }} contentContainerStyle={styles.container}>
    <Text style={styles.title}>Basic Card</Text>
    <BasicCard>
      <Text style={styles.cardTitle}>I'm a Basic Card</Text>
    </BasicCard>
    <Text style={styles.title}>Nested Basic Card</Text>
    <BasicCard>
      <Text style={[styles.cardTitle, { marginBottom: 12 }]}>This is a parent!</Text>
      <BasicCard>
        <Text style={styles.cardTitle}>I'm a child!</Text>
      </BasicCard>
    </BasicCard>
    <Text style={styles.title}>Card With Image</Text>
    <CardWithImage
      title='Such a beautiful image!'
      uri='https://images.unsplash.com/photo-1493847242172-d46053a1f671?ixlib=rb-0.3.5&s=22b33507bc597994d7ec32b2796d038b&auto=format&fit=crop&w=1350&q=80'
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
