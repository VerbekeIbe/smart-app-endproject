import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { postData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'

import { font } from '../../styles/font';
import { form } from '../../styles/components/form';
import { buttons } from '../../styles/components/buttons';


export default function AddUser(object: any) {
    const [name, setName] = useState("");
    const [threshold, setThreshold] = useState("");
    const [stock, setStock] = useState("");
    const [categorie, setCategorie] = useState("Groot");

    const validateSubmit = () => {
        if (name == "" ||
            stock == "" ||
            threshold == "") {
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
        const endpoint = "materiaal/add"
        const requestBody = {
            naam: name,
            stock: stock,
            categorie: categorie,
            drempel: threshold
        }

        console.log(requestBody)
        console.log(endpoint)
        postData({ endpoint, requestBody })

        object.navigation.navigate("Materiaal List");
    };


    return (
        <View style={form.basic}>

            <View>
                <Text style={font.subTitle}>Naam:</Text>
                <TextInput onChangeText={text => setName(text)} value={name} style={form.input} />
                <Text style={font.subTitle}>Hoeveelheid:</Text>
                <TextInput keyboardType="numeric" onChangeText={text => setStock(text.replace(/[^0-9]/g, ''))} value={stock} style={form.input} />
                <Text style={font.subTitle}>Categorie:</Text>

                <Picker
                    selectedValue={categorie} style={form.input}
                    onValueChange={itemValue => setCategorie(itemValue.toString())}>
                    <Picker.Item label="Groot" value="Groot" />
                    <Picker.Item label="Klein" value="Klein" />
                    <Picker.Item label="Bar" value="Bar" />
                    <Picker.Item label="Keuken" value="Keuken" />
                </Picker>
                <Text style={font.subTitle}>Drempel:</Text>
                <TextInput keyboardType="numeric" onChangeText={text => setThreshold(text.replace(/[^0-9]/g, ''))} value={threshold} style={form.input} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 24, alignItems: 'center', paddingVertical: 24 }}>
                <TextButton style={buttons.confirm_form} title="Opslaan" onPress={() => validateSubmit()} />
            </View>







        </View>
    )
}