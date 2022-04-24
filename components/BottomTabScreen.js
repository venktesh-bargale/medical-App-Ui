import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import CircleAnimation from './CircleAnimation';
import Notification from './Notification';
import Schedule from './Schedule';
import Report from './Report';
const BottomTabScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={CircleAnimation} />
    <Tab.Screen name="Schedule" component={Schedule} />
    <Tab.Screen name="Report" component={Report} />
    <Tab.Screen name="Notification" component={Notification} />
  </Tab.Navigator>
  )
}

export default BottomTabScreen