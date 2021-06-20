import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Broker from '../models/broker'

import Card from './UI/Card'

type BrokerItemProps = {
  broker: Broker
}

const BrokerItem = (props : BrokerItemProps) => {
  return (
    <Card style={styles.brokerItem}>
      <Text style={styles.title}>{props.broker.Name}</Text>
      <Text style={styles.subTitle}>{props.broker.URL}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  brokerItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  },
  subTitle: {
    fontSize: 12
  }
})

export default BrokerItem
