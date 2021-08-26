import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {neutral, theme} from '../../styles/colors'

import ShoppingList from './ShoppingList';
import EditShoppingItem from './EditShoppingItem';

const Stack = createStackNavigator();

export default function LeningStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Shopping List' component={ShoppingList} options={{
        title: 'Boodschappenlijst', cardStyle: { backgroundColor: neutral[300] }, headerTitleAlign: 'center', headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />
      <Stack.Screen name='Edit Shopping Item' component={EditShoppingItem} options={{
        title: 'Boodschappen', cardStyle: { backgroundColor: neutral[300] }, headerTitleAlign: 'center', headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />

    </Stack.Navigator>
  )
}
