import React, {useState} from 'react'
import { Text, View } from 'react-native'
import { postEndLening } from '../utils/DataHandler'
import { list } from '../styles/components/list';
import TextButton from '../components/TextButton'
import { font } from '../styles/font';
import { buttons } from '../styles/components/buttons';


const LeningListItem = ({ object, navigation }: any) => {
    const [refreshPage, setRefreshPage] = useState("");

    const endLening = () => {
        navigation.navigate('End Lening', object);
    }


    const closeLening = () => {
        const endpoint = "lening/close"
        const id = object.leningId


        postEndLening({ endpoint, id })
        setRefreshPage("refresh");
    }

    return (
        <View style={list.card}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>

            <View style={{maxWidth: 120, flexDirection:'column', justifyContent:'flex-end'}}>
            <Text numberOfLines={1} style={font.title}>{object.materiaal.naam}</Text>
            <Text style={font.normal}>{object.lener.voornaam} {object.lener.naam}</Text>
            <Text style={font.digit}>{object.hoeveelheid}</Text>

            </View>
            <View style={{ flexDirection: 'column', justifyContent:'flex-end', alignItems:'flex-end'}}>
            <TextButton title="Terugbrengen" onPress={() => endLening()} style={buttons.confirm_card}/>
            
            </View>
            </View>

        </View>

    )
}

export default LeningListItem;