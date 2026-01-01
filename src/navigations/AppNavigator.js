import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
const Stack=createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}

export default AppNavigator