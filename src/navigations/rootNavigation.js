import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import HomeNavigation from './homeNavigation';


const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <NavigationContainer>


      
        <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}
      initialRouteName="LoginScreen">
            <Stack.Screen name='LoginScreen' component={LoginScreen}
            options={{
              title:"Login Page"
            }}
            />

           <Stack.Screen name='Tabs' component={HomeNavigation} options={{ headerShown: false }}  />


        </Stack.Navigator>

      
    </NavigationContainer>
  )
}

export default RootNavigation