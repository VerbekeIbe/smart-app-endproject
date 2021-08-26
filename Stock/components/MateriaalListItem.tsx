import React from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import { font } from '../styles/font';
import { buttons } from '../styles/components/buttons'
import { list } from '../styles/components/list'
import { info } from '../styles/utils/info'
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
            <View style={info.materiaal}>
                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                
                <View style={{maxWidth: 150}} >
                <Text numberOfLines={1} style={font.title}>{object.naam}</Text>
                <Text style={font.normal}>{object.categorie}</Text>
                <Text style={font.digit}>{object.stock}</Text>
                </View>
                
                
                <View style={{justifyContent:'space-between'}} >
                <IconButton  onPress={() => {update(object)}} iconName="edit" size="25" color="white" style={buttons.edit}/>
                <TextButton title="Lenen" onPress={() => {lenen(object)}} style={buttons.confirm}/>
                </View>
                </View>
            </View>
            
            
            {/* <Button title="Edit" onPress={() => {edit(object)}} /> */}
            <View style={{ flexDirection:"row", margin:"auto", padding:2, justifyContent:"space-evenly"}}>
            
            
            </View>
        </View>
        
    )
}


export default MateriaalListItem;