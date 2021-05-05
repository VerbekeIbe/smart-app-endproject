import React from 'react'
import {Text, Button, View} from 'react-native'

const MateriaalListItem = ({object, navigation}: any) => {
const edit = (data: any) => {
    navigation.navigate('Update Materiaal',data);
    }

    return (
        <View>
            <Text>{object.naam}</Text>
            <Text>{object.stock}</Text>
            <Text>{object.categorie}</Text>
            <Button title="Edit" onPress={() => {edit(object)}} />
            <Button title="Lenen" onPress={() => {}} />
        </View>
        
    )
}

export default MateriaalListItem;