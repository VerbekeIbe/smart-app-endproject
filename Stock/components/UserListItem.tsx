import React from 'react'
import { Text, View } from 'react-native'
import IconButton from '../components/IconButton'

import { font } from '../styles/font';
import { buttons } from '../styles/components/buttons'
import { list } from '../styles/components/list'

const UserListItem = ({ object, navigation }: any) => {

    const edit = (data: any) => {
        navigation.navigate('Update User', data);
    }


    return (
        <View style={list.card}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>

            <View style={{maxWidth: 200, flexDirection:'column', justifyContent:'flex-end'}}>
                <View>
                    <Text style={font.title}>{object.voornaam} {object.naam}</Text>
                    <Text numberOfLines={1} style={font.normal}>{object.email}</Text>
                </View>
               
            </View>
            <View style={{flexDirection: 'column', justifyContent:'center', alignItems:'center'}} >
                    <IconButton onPress={() => { edit(object) }} iconName="edit" size="48" color="white" style={buttons.edit} />
                </View>
            </View>
        </View>

    )
}

export default UserListItem;
