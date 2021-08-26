import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {neutral, theme} from '../../styles/colors'

import LeningList from './LeningList';
import EndLening from './EndLening';

const Stack = createStackNavigator();

export default function LeningStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Lening List' component={LeningList} options={{
        title: 'Leningen', cardStyle: { backgroundColor:  neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor:  neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
      <Stack.Screen name='End Lening' component={EndLening} options={{
        title: 'Terugbrengen', cardStyle: { backgroundColor:  neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor:  neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />

    </Stack.Navigator>
  )
}
