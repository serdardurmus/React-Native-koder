// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Timeline, Post, Friends} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainComponent() {
  return (
      <Stack.Navigator initialRouteName="MainComponentPage">
          <Stack.Screen name="MainPage" component={Timeline} />
          <Stack.Screen name="PostPage" component={Post} />
      </Stack.Navigator>
  )
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="MainComponentPage"  // Varsayılar tab burdan ayarlanıyor
        lazy={true} // Kullanılmayan tabbar yüklenmiyor
        tabBarOptions={{  // Burda tabbar görsel ayarları yapılıyor
          activeTintColor: "purple"
        }}
      >
        <Tab.Screen name="MainComponentPage" component={MainComponent} options={{title: "Ana Sayfa"}} />
        {/* <Tab.Screen name="PostPage" component={Post} options={{title: "Gönderiler"}} /> */}
        <Tab.Screen name="FriendsPage" component={Friends} options={{title: "Friends"}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;