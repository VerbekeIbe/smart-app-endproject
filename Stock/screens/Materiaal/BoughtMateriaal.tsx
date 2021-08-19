import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'
import Slider from '@react-native-community/slider';
import TextButton from '../../components/TextButton';
import { postData } from '../../utils/DataHandler';

const BoughtMateriaal = ({ route, navigation }: any) => {
    const [stock, setStock] = useState(route.params.stock);
    const [more, setMore] = useState("0");

    const submitGained = () => {
        const numStock = Number(stock)
        const numMore = Number(more)
        let newAmount = numStock + numMore;
        console.log(`This is the new amount: ${newAmount}`)

        const endpoint = "materiaal/update"
        const requestBody = {
            materiaalId: route.params.materiaalId,
            naam: route.params.naam,
            stock: newAmount,
            categorie: route.params.categorie,
            drempel: route.params.drempel
        }

        console.log(requestBody);
        postData({ endpoint, requestBody })

        navigation.navigate("Materiaal List");
    }

    return (
         <><Text>Hoeveel is er bijgekocht?</Text>
        
        <TextInput keyboardType="numeric" onChangeText={text => setMore(text.replace(/[^0-9]/g, ''))} value={more}/>

            <TextButton title="Opslaan" onPress={() => submitGained()}/>
            
            </>
    )
}

export default BoughtMateriaal;
