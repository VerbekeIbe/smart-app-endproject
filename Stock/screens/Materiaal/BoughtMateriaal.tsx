import React, { useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import TextButton from '../../components/TextButton';
import { buttons } from '../../styles/components/buttons';
import { form } from '../../styles/components/form';
import { font } from '../../styles/font';
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

    const handleSubmit = () => {
        if(Number(more) > 0){
            submitGained()
        }else {
            Alert.alert(
                "Ongeldig",
                "Voer een geldige waarde in.",
                [
                    {
                        text: "OK",
                        
                        style: "cancel"
                    }
                ]
            );
        }
    }

    return (
        <>
            <View style={{flexDirection: 'column', paddingHorizontal: 24, paddingVertical: 48, justifyContent:'space-between', height:'100%'}}>
                <View>
                    <Text style={font.title}>{route.params.naam}</Text>
                    <Text style={font.subTitle}>Hoeveel is er bijgekocht?</Text>

                    <TextInput style={form.input} keyboardType="numeric" onChangeText={text => setMore(text.replace(/[^0-9]/g, ''))} value={more} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                    <TextButton style={buttons.confirm_lg} title="Opslaan" onPress={() => handleSubmit()} />
                </View>
            </View>


        </>
    )
}

export default BoughtMateriaal;
