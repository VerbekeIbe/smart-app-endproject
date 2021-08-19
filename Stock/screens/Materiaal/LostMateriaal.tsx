import React, { useState } from 'react'
import { Text } from 'react-native'
import Slider from '@react-native-community/slider';
import TextButton from '../../components/TextButton';
import { postData } from '../../utils/DataHandler';

const LostMateriaal = ({ route, navigation }: any) => {
    const [stock, setStock] = useState(route.params.stock);
    const [less, setLess] = useState(0);

    const submitLost =  () => {
        let newAmount = stock - less;

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
    };


    return (

        <><Text>Hoeveel is er weg?</Text>
        <Slider
            onValueChange={value => setLess(value)}
            step={1}
            // style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={route.params.stock}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000" />
            <Text>
                {less}
            </Text>
            
            <TextButton title="Opslaan" onPress={() => submitLost()}/>
            
            </>

            
    )
};

export default LostMateriaal;
