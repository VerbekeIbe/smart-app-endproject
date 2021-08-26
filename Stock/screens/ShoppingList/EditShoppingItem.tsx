import { CommonActions } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View } from 'react-native';
import TextButton from '../../components/TextButton';
import { buttons } from '../../styles/components/buttons';
import { postData } from '../../utils/DataHandler';

const EditShoppingItem = ({ route, navigation }: any) => {

    const GoToBoughtMateriaal = () => {
        navigation.pop();
        navigation.navigate('Bought Materiaal', route.params);

        
    }

    const removeFromShoppingList = () => {
        const endpoint = "materiaal/update"
        const requestBody = {
            materiaalId: route.params.materiaalId,
            naam: route.params.naam,
            stock: route.params.stock,
            categorie: route.params.categorie,
            drempel: 0
        }
        console.log("requestBody")
        console.log(requestBody)

        console.log(endpoint)
        postData({ endpoint, requestBody })
        navigation.navigate('Shopping List')
    }

    useEffect(() => {
        console.log("Edit shopping Item")
        console.log(route.params)
    },[])





    return (
        <>
        <View style={{justifyContent: 'center', height: '100%'}}>
            <TextButton style={buttons.confirm_lg} title="Aangekocht" onPress={() => GoToBoughtMateriaal() } />
            <TextButton style={buttons.confirm_lg} title="Niet nodig" onPress={() =>  removeFromShoppingList()} />
        </View>
        </>
    )
}

export default EditShoppingItem;