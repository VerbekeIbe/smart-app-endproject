import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { postData, deleteData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'

import { font } from '../../styles/font';
import { buttons } from '../../styles/components/buttons';
import { form } from '../../styles/components/form';


const EditMateriaal = ({ route, navigation }: any) => {
    const [name, setName] = useState(route.params.naam);
    const [threshold, setThreshold] = useState(route.params.drempel);
    const [stock, setStock] = useState(route.params.stock);
    const [categorie, setCategorie] = useState(route.params.categorie);


    useEffect(() => {
        console.log("navigation")
        console.log(navigation)
        console.log("other object")
        console.log(route)
    }, [])

    const validateSubmit = () => {
        if (name == "" ||
            threshold == "" ||
            stock == "") {
            Alert.alert(
                "Ongeldig",
                "Er zijn één of meerdere velden leeg.",
                [
                    {
                        text: "OK",

                        style: "cancel"
                    }
                ]
            );

        } else {
            submit()
        }
    }

    const submit = () => {

        const endpoint = "materiaal/update"
        const requestBody = {
            materiaalId: route.params.materiaalId,
            naam: name,
            stock: stock,
            categorie: categorie,
            drempel: threshold
        }

        console.log(requestBody)
        console.log(endpoint)
        postData({ endpoint, requestBody })

        navigation.navigate("Materiaal List");


    };

    const alertDeleteMateriaal = () =>
        Alert.alert(
            "Materiaal verwijderen",
            "Weet je het zeker? Deze actie is onomkeerbaar.",
            [
                {
                    text: "Annuleren",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Verwijderen", onPress: () => deleteMateriaal() }
            ]
        );

    const deleteMateriaal = () => {
        const endpoint = "materiaal"
        const id = route.params.materiaalId

        deleteData({ endpoint, id })
        navigation.navigate("Materiaal List");
    }



    return (
        <>
            <View style={{ flexDirection: 'column', paddingHorizontal: 24, paddingVertical: 48, justifyContent: 'space-between', height: '100%' }}>

                <View>
                    <Text style={font.subTitle}>Naam:</Text>
                    <TextInput onChangeText={text => setName(text)} value={name} style={form.input} />
                    <Text style={font.subTitle}>Categorie:</Text>
                    <Picker
                        selectedValue={categorie}
                        onValueChange={itemValue => setCategorie(itemValue)}
                        style={form.input}
                    >

                        <Picker.Item label="Groot" value="Groot" />
                        <Picker.Item label="Klein" value="Klein" />
                        <Picker.Item label="Bar" value="Bar" />
                        <Picker.Item label="Keuken" value="Keuken" />
                    </Picker>
                    <Text style={font.subTitle}>Hoeveelheid:</Text>
                    <TextInput keyboardType="numeric" onChangeText={text => setStock(text.replace(/[^0-9]/g, ''))} value={stock.toString()} style={form.input} />

                    <Text style={font.subTitle}>Drempel:</Text>
                    <TextInput keyboardType="numeric" onChangeText={text => setThreshold(text.replace(/[^0-9]/g, ''))} value={threshold.toString()} style={form.input} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 24, alignItems: 'center' }}>

                    <TextButton style={buttons.delete_form} title="Verwijderen" onPress={() => alertDeleteMateriaal()} />
                    <TextButton style={buttons.confirm_form} title="Opslaan" onPress={() => validateSubmit()} />
                </View>



            </View>
        </>
    )
}

export default EditMateriaal;