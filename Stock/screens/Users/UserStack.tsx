import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import UserList from './UserList';
import  AddUser from './AddUser';
import  UpdateUser from './UpdateUser';


const Stack = createStackNavigator();

export default function UserStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Users" component={UserList}/>
                <Stack.Screen name ="Add User" component={AddUser}/>
                <Stack.Screen name ="Update User" component={UpdateUser}/>  
            </Stack.Navigator>
    );
}

