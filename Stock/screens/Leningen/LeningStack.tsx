import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../../styles/colors'

import LeningList from './LeningList';
import EndLening from './EndLening';

const Stack = createStackNavigator();

export default function LeningStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Lening List' component={LeningList} options={{
        title: 'Leningen', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />
      <Stack.Screen name='End Lening' component={EndLening} options={{
        title: 'end lening', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />

    </Stack.Navigator>
  )
}
