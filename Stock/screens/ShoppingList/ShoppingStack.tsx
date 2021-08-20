import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../../styles/colors'

import ShoppingList from './ShoppingList';
import EditShoppingItem from './EditShoppingItem';

const Stack = createStackNavigator();

export default function LeningStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Shopping List' component={ShoppingList} options={{
        title: 'Boodschappenlijst', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />
      <Stack.Screen name='Edit Shopping Item' component={EditShoppingItem} options={{
        title: 'EditShoppingItem', cardStyle: { backgroundColor: colors.alpha }, headerStyle:
          { backgroundColor: colors.headerbg },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: '600',
        }
      }} />

    </Stack.Navigator>
  )
}
