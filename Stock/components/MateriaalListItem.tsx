import React from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import { font } from '../styles/generic'
import { buttons } from '../styles/components/buttons'
import { list } from '../styles/components/list'
import { info } from '../styles/utils/info'
import TextButton from '../components/TextButton'
import IconButton from '../components/IconButton'



const MateriaalListItem = ({object, navigation}: any) => {
const edit = (data: any) => {
    navigation.navigate('Update Materiaal',data);
    }

const lenen = (data: any) => {
    navigation.navigate('Start Lening', data)
}

    return (
        <View style={list.listItem}>
            <View style={info.materiaal}>
                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                <View>
                    <Text style={font.listTitle}>Naam:</Text>
                    <Text style={font.listTitle}>Hoeveelheid:</Text>
                    <Text style={font.listTitle}>Categorie:</Text>
                </View>
                <View style={{maxWidth: 150}} >
                <Text numberOfLines={1} style={font.normal}>{object.naam}</Text>
                <Text style={font.normal}>{object.stock}</Text>
                <Text style={font.normal}>{object.categorie}</Text>
                </View>
                <View>
                <IconButton  onPress={() => {edit(object)}} iconName="edit" size="25" color="white" style={buttons.neutral}/>
                </View>
                </View>
            </View>
            
            
            {/* <Button title="Edit" onPress={() => {edit(object)}} /> */}
            <View style={{ flexDirection:"row", margin:"auto", padding:"2", justifyContent:"space-evenly"}}>
            
            <TextButton title="Lenen" onPress={() => {lenen(object)}} style={buttons.alternative}/>
            </View>
        </View>
        
    )
}


export default MateriaalListItem;