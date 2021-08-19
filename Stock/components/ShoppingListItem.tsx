import React from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import { font } from '../styles/generic'
import  { list } from '../styles/components/list'

const ShoppingListItem = ({object}: any) => {
    return (
        <View style={list.listItem}>
            
            <View style={{flexDirection:"row", justifyContent:'stretch'}}>
                <View style={{marginRight: 50}}>
                <Text style={font.listTitle}>Naam:</Text>
                <Text style={font.listTitle}>Categorie:</Text>
                <Text style={font.listTitle}>Stock:</Text>
                <Text style={font.listTitle}>Drempel:</Text>
                </View>
                <View>
                <Text style={font.normal}>{object.naam}</Text>
                <Text style={font.normal}>{object.categorie}</Text>
                <Text style={font.normal}>{object.stock}</Text>
                <Text style={font.normal}>{object.drempel}</Text>  
                </View>
        </View>
        </View>
        
    )
}


export default ShoppingListItem;