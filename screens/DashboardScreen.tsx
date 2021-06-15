import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, FlatList, Text, Button, ActivityIndicator } from 'react-native'

import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'

import * as brokersActions from '../store/actions/brokers'

import Colors from '../constants/Colors'
import BrokerItem from '../components/BrokerItem'

interface DashboardScreenProps {
  navigation: StackNavigationProp
}

const DashboardScreen = (props : DashboardScreenProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<string | null>()
  
  const brokers = useSelector((state: RootState) => state.brokers.brokers)

  const dispatch = useDispatch()

  const loadBrokers = useCallback(async () => {
    setError(null)
    setIsRefreshing(true)

    try {
      await dispatch(brokersActions.loadBrokers())
    } catch (err) {
      setError(err.message)
    }

    setIsRefreshing(false)
  }, [dispatch, setIsLoading, setError])

  useEffect(() => {
    const willFocusSub = props.navigation.addListener('willFocus', loadBrokers)

    return () => {
      willFocusSub.remove()
    }
  }, [loadBrokers])

  useEffect(() => {
    setIsLoading(true)
    loadBrokers().then(() => {
      setIsLoading(false)
    })
  }, [dispatch, loadBrokers])

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Text>{error}</Text>
        <Button
          title='Try again'
          onPress={loadBrokers}
          color={Colors.primary}
        />
      </View>
    )
  }

  if (isLoading)
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    )

  if (!isLoading && brokers.length === 0)
    return (
      <View style={styles.centered}>
        <Text>No brokers found. Try adding some first!</Text>
      </View>
    )

  return (
    <View>
      <FlatList data={brokers} keyExtractor={item => item.Name} onRefresh={loadBrokers} refreshing={isRefreshing} renderItem={itemData => (
        <BrokerItem broker={itemData.item} />
      )}  />
    </View>
  )
}

DashboardScreen.navigationOptions = {
  headerTitle: 'Brokers'
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

export default DashboardScreen