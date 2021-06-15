import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import DashboardScreen from '../screens/DashboardScreen'

import Colors from '../constants/Colors'

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const StackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
)

const MainNavigator = createSwitchNavigator({
  Stack: StackNavigator
})

export default createAppContainer(MainNavigator)