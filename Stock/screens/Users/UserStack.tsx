import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {neutral, theme} from '../../styles/colors'

import UserList from './UserList';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';


const Stack = createStackNavigator();

export default function UserStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UserList} options={{
        title: 'Gebruikers', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }

      }} />
      <Stack.Screen name="Add User" component={AddUser} options={{
        title: 'Gebruiker toevoegen', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
      <Stack.Screen name="Update User" component={UpdateUser} options={{
        title: 'Gebruiker bewerken', cardStyle: { backgroundColor: neutral[300] }, headerStyle:
          { backgroundColor: theme['alpha'] },
        headerTintColor: neutral[100],
        headerTitleStyle: {
          fontWeight: '600',
          alignSelf: 'center'
        }
      }} />
    </Stack.Navigator>
  );
}

