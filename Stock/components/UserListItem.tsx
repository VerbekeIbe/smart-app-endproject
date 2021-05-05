import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {Text, Button, View} from 'react-native'
import Lener from '../models/Lener'
import UpdateUser from '../screens/Users/UpdateUser'

const UserListItem = ({object, navigation}: any) => {

const edit = (data: any) => {
navigation.navigate('Update User',data);
console.log("data: ",data)
}


    return (
        <View>
            <Text>{object.voornaam} {object.naam}</Text>
            <Text>{object.email}</Text>
            <Button title="Edit" onPress={() => {edit(object)}} />
        </View>
        
    )
}

export default UserListItem;
