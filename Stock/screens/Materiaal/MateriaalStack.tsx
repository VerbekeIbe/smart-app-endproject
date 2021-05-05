import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MateriaalList from './MateriaalList';
import UpdateMateriaal from './UpdateMateriaal'



const Stack = createStackNavigator();

export default function MateriaalStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Materiaal List' component={MateriaalList} />
            <Stack.Screen name='Update Materiaal' component={UpdateMateriaal} />
        </Stack.Navigator>
        )
}
