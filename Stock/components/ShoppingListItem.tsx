import React from 'react'
import { Text,  View } from 'react-native'
import { font } from '../styles/font';
import { list } from '../styles/components/list'
import { buttons } from '../styles/components/buttons'
import IconButton from './IconButton'

const ShoppingListItem = ({ object, navigation }: any) => {

    const editShoppingItem = () => {
        navigation.navigate('Edit Shopping Item', object);
    };



    return (
        <View style={list.card}>

            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>

                <View style={{ maxWidth: 150, flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <Text numberOfLines={1} style={font.title}>{object.naam}</Text>
                    <Text style={font.normal}>{object.categorie}</Text>

                    <View style={{ flexDirection: "row", }}>
                        <Text style={font.normal}>Drempel: </Text>
                        <Text style={font.normal}>{object.drempel}</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'column', justifyContent:'space-between', alignItems:'center'}}>

                    <Text style={font.digit}>{object.stock}</Text>

                    <IconButton onPress={() => editShoppingItem()} iconName="keyboard-arrow-right" size="25" color="white" style={buttons.edit} navigation={navigation} />
                </View>
            </View>
        </View>

    )
}


export default ShoppingListItem;