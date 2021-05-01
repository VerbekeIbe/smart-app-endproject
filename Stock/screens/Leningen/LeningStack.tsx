import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LeningList from './LeningList';

const Stack = createStackNavigator();

export default function LeningStack({navigation}: any) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Lening List' component={LeningList}/>

        </Stack.Navigator>
    )
}
