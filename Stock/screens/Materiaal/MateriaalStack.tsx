import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MateriaalList from './MateriaalList';
import UpdateMateriaal from './UpdateMateriaal'
import AddMateriaal from './AddMateriaal'
import StartLening from '../Leningen/StartLening'
import colors from '../../styles/colors'




const Stack = createStackNavigator();

export default function MateriaalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Materiaal List' component={MateriaalList} options={{
        title: 'Materiaal', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />
      <Stack.Screen name='Update Materiaal' component={UpdateMateriaal} options={{
        title: 'Materiaal bewerken', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />
      <Stack.Screen name='Add Materiaal' component={AddMateriaal} options={{
        title: 'Materiaal toevoegen', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />
      <Stack.Screen name='Start Lening' component={StartLening} options={{
        title: 'Materiaal lenen', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />
    </Stack.Navigator>
  )
}
