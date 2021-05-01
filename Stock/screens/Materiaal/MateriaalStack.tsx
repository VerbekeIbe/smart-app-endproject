import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MateriaalList from './MateriaalList';



const Stack = createStackNavigator();

export default function MateriaalStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Materiaal List' component={MateriaalList} />
        </Stack.Navigator>
        )
}
