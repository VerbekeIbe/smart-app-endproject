import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../../styles/colors'

import LeningList from './LeningList';

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

    </Stack.Navigator>
  )
}
