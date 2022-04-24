import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CircleAnimation from './CircleAnimation';
import DoctorsScreen from '../DoctorsScreen';
import BottomTabScreen from './BottomTabScreen';
const Stack = createNativeStackNavigator();
const Screens = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>                 
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="Profile" component={CircleAnimation} />
        <Stack.Screen name="DoctorsScreen" component={DoctorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;