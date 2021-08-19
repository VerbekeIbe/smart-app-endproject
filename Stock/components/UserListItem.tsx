import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, Button, View } from 'react-native'
import Lener from '../models/Lener'
import UpdateUser from '../screens/Users/UpdateUser'
import IconButton from '../components/IconButton'

import { font } from '../styles/generic'
import { buttons } from '../styles/components/buttons'
import { list } from '../styles/components/list'

const UserListItem = ({ object, navigation }: any) => {

    const edit = (data: any) => {
        navigation.navigate('Update User', data);
    }


    return (
        <View style={list.listItem}>
            <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                <View>
                    <Text style={font.listTitle}>Naam:</Text>
                    <Text style={font.listTitle}>Email:</Text>
                </View>
                <View style={{ maxWidth: 210 }}>
                    <Text style={font.normal}>{object.voornaam} {object.naam}</Text>
                    <Text numberOfLines={1} style={font.normal}>{object.email}</Text>
                </View>
                <IconButton onPress={() => { edit(object) }} iconName="edit" size="48" color="white" style={buttons.neutral} />
            </View>
        </View>

    )
}

export default UserListItem;
