import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'


import colors from './styles/colors'



import LeningStack from './screens/Leningen/LeningStack'
import MateriaalStack from './screens/Materiaal/MateriaalStack';
import UserStack from './screens/Users/UserStack';
import ShoppingStack from './screens/ShoppingList/ShoppingStack';


const Stack =  createStackNavigator();
const Tabs = createBottomTabNavigator();
const URL = 'http://localhost:5000';





export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Materiaal') {
              iconName ='sports-basketball';
            } else if (route.name === 'Users') {
              iconName = focused ? 'person' : 'person-outline';
            }  else if (route.name === 'Leningen') {
              iconName = 'outbox';
            }  else if (route.name === 'Shopping List') {
              iconName = 'shopping-bag';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.beta,
          inactiveTintColor: colors.light, 
          style: {backgroundColor: colors.headerbg}
        }}
      >
        <Tabs.Screen name="Materiaal" component={MateriaalStack}/>
        <Tabs.Screen name="Users" component={UserStack} options={{ title: 'Gebruikers' }}/>
        <Tabs.Screen name="Leningen" component={LeningStack}/>
        <Tabs.Screen name="Shopping List" component={ShoppingStack} options={{ title: 'Boodschappen' }}/>
      </Tabs.Navigator>  
       </NavigationContainer>
  )
}

