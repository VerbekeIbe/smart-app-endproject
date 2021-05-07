import React, {useState} from 'react'
import { Text, Button, View, TouchableOpacity } from 'react-native'
import { postEndLening } from '../utils/DataHandler'
import { list } from '../styles/generic'
import TextButton from '../components/TextButton'
import IconButton from '../components/IconButton'
import { buttons, font } from '../styles/generic'


const LeningListItem = ({ object }: any) => {
    const [refreshPage, setRefreshPage] = useState("");
    const closeLening = () => {
        const endpoint = "lening/close"
        const id = object.leningId


        postEndLening({ endpoint, id })
        setRefreshPage("refresh");
    }

    return (
        <View style={list.listItem}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                <View>
            <Text style={font.listTitle}>Materiaal:</Text>
            <Text style={font.listTitle}>Hoeveelheid:</Text>
            <Text style={font.listTitle}>Naam:</Text>
            </View>
            <View>
            <Text style={font.normal}>{object.materiaal.naam}</Text>
            <Text style={font.normal}>{object.hoeveelheid}</Text>
            <Text style={font.normal}>{object.lener.voornaam} {object.lener.naam}</Text>
            </View>
            <View>
            <IconButton onPress={() => closeLening()} iconName="assignment-returned" size="48" color="white" style={buttons.neutral} />
            </View>
            </View>

        </View>

    )
}

export default LeningListItem;