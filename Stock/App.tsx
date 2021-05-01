import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import LeningStack from './screens/Leningen/LeningStack'
import MateriaalStack from './screens/Materiaal/MateriaalStack';
import UserStack from './screens/Users/UserStack';


const Stack =  createStackNavigator();
const Tabs = createBottomTabNavigator();
const URL = 'http://localhost:5000';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Materiaal" component={MateriaalStack}/>
        <Tabs.Screen name="Users" component={UserStack}/>
        <Tabs.Screen name="Leningen" component={LeningStack}/>
      </Tabs.Navigator>  
       </NavigationContainer>
  )
}

