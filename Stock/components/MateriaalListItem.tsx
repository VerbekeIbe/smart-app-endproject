import React from 'react'
import {Text, View} from 'react-native'
import { font } from '../styles/font';
import { buttons } from '../styles/components/buttons'
import { list } from '../styles/components/list'
import TextButton from '../components/TextButton'
import IconButton from '../components/IconButton'



const MateriaalListItem = ({object, navigation}: any) => {
const update = (data: any) => {
    console.log(data);
    navigation.navigate('Update Materiaal',data);
    }

const lenen = (data: any) => {
    navigation.navigate('Start Lening', data)
}

    return (
        <View style={list.card}>
                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                
                <View style={{maxWidth: 150, flexDirection:'column', justifyContent:'flex-end'}} >
                <Text numberOfLines={1} style={font.title}>{object.naam}</Text>
                <Text style={font.normal}>{object.categorie}</Text>
                <Text style={font.digit}>{object.stock}</Text>
                </View>
                
                
                <View style={{flexDirection: 'column', justifyContent:'space-between', alignItems:'flex-end'}} >
                <IconButton  onPress={() => {update(object)}} iconName="edit" size="25" color="white" style={buttons.edit}/>
                <TextButton title="Lenen" onPress={() => {lenen(object)}} style={buttons.confirm_card}/>
                </View>

                </View>
        </View>
        
    )
}


export default MateriaalListItem;