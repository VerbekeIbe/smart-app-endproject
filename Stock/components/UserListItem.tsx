import React from 'react'
import {Text, Button, View} from 'react-native'

const UserListItem = ({voornaam, naam, email}: any) => {
    return (
        <View>
            <Text>{voornaam} {naam}</Text>
            <Text>{email}</Text>
        </View>
        
    )
}

export default UserListItem;
