import React from 'react'
import {Text, Button, View} from 'react-native'

const LeningListItem = ({ object }: any) => {
    return (
        <View>
            <Text>{object.materiaal.naam}</Text>
            <Text>{object.hoeveelheid}</Text>
            <Text>{object.lener.voornaam} {object.lener.naam}</Text>
            <Button title="Close Lening" onPress={() => {}} />
        </View>
        
    )
}

export default LeningListItem;