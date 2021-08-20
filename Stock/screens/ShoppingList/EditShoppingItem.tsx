import React from 'react'
import { useEffect } from 'react';
import TextButton from '../../components/TextButton';
import { postData } from '../../utils/DataHandler';

const EditShoppingItem = ({ route, navigation }: any) => {

    const GoToBoughtMateriaal = () => {
        navigation.navigate('Bought Materiaal', route.params)
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
            <TextButton title="Ik heb meer aangekocht" onPress={() => GoToBoughtMateriaal() } />
            <TextButton title="Dit hebben we niet meer nodig" onPress={() =>  removeFromShoppingList()} />
        </>
    )
}

export default EditShoppingItem;