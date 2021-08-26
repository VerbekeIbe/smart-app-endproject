import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MateriaalList from './MateriaalList';
import EditMateriaal from './EditMateriaal';
import AddMateriaal from './AddMateriaal'
import StartLening from '../Leningen/StartLening'
import {theme, neutral} from '../../styles/colors'
import BoughtMateriaal from './BoughtMateriaal';
import LostMateriaal from './LostMateriaal';
import UpdateMateriaal from './UpdateMateriaal';





const Stack = createStackNavigator();

export default function MateriaalStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Materiaal List' component={MateriaalList} options={{
        title: 'Materiaal', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
      <Stack.Screen name='Update Materiaal' component={UpdateMateriaal} options={{
        title: 'Materiaal bewerken', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
      <Stack.Screen name='Edit Materiaal' component={EditMateriaal} options={{
        title: 'Materiaal bewerken', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
      <Stack.Screen name='Bought Materiaal' component={BoughtMateriaal} options={{
        title: 'Materiaal gekocht', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
      <Stack.Screen name='Lost Materiaal' component={LostMateriaal} options={{
        title: 'Materiaal weg', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha']},
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />

      <Stack.Screen name='Add Materiaal' component={AddMateriaal} options={{
        title: 'Materiaal toevoegen', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
      <Stack.Screen name='Start Lening' component={StartLening} options={{
        title: 'Materiaal lenen', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
    </Stack.Navigator>
  )
}
