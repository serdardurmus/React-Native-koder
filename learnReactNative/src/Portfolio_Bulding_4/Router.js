// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Timeline from './pages/Timeline';
import Second from './pages/Second';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="TimelinePage"
        screenOptions={{headerShown: true, gestureEnabled: true}}
      >
        <Stack.Screen 
            name="TimelinePage" 
            component={Timeline} 
            options={{title: 'Bir şehir seçiniz'}}/>
        <Stack.Screen name="SecondPage" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;