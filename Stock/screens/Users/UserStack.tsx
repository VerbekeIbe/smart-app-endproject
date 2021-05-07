import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../../styles/colors'

import UserList from './UserList';
import  AddUser from './AddUser';
import  UpdateUser from './UpdateUser';


const Stack = createStackNavigator();

export default function UserStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Users" component={UserList} options={{ title: 'Gebruikers', cardStyle:{backgroundColor: colors.alpha },headerStyle:
            {backgroundColor: colors.headerbg},
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontWeight: '600',
          } }}/>
                <Stack.Screen name ="Add User" component={AddUser} options={{ title: 'Gebruiker toevoegen', cardStyle:{backgroundColor: colors.alpha },headerStyle:
            {backgroundColor: colors.headerbg},
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontWeight: '600',
          } }}/>
                <Stack.Screen name ="Update User" component={UpdateUser} options={{ title: 'Gebruiker bewerken', cardStyle:{backgroundColor: colors.alpha },headerStyle:
            {backgroundColor: colors.headerbg},
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontWeight: '600',
          } }}/>  
            </Stack.Navigator>
    );
}

