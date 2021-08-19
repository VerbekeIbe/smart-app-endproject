import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { postData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'
import IconButton from '../../components/IconButton'

import { form } from '../../styles/generic'
import { buttons } from '../../styles/components/buttons';
import { font } from '../../styles/generic'

export default function AddUser(object: any) {
    const [name, setName] = useState("");
    const [threshold, setThreshold] = useState("");
    const [stock, setStock] = useState("");
    const [categorie, setCategorie] = useState("Groot");

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
            <Text style={font.title}>Naam:</Text>
            <TextInput onChangeText={text => setName(text)} value={name} style={form.input} />
            <Text style={font.title}>Hoeveelheid:</Text>
            <TextInput keyboardType="numeric" onChangeText={text => setStock(text.replace(/[^0-9]/g, ''))} value={stock} style={form.input} />
            <Text style={font.title}>Categorie:</Text>

            <Picker
                selectedValue={categorie} style={form.input}
                onValueChange={itemValue => setCategorie(itemValue.toString())}>
                <Picker.Item label="Groot" value="Groot" />
                <Picker.Item label="Klein" value="Klein" />
                <Picker.Item label="Bar" value="Bar" />
                <Picker.Item label="Keuken" value="Keuken" />
            </Picker>
            <Text style={font.title}>Drempel:</Text>
            <TextInput keyboardType="numeric" onChangeText={text => setThreshold(text.replace(/[^0-9]/g, ''))} value={threshold} style={form.input} />





            <IconButton title="Submit" onPress={() => submit()} iconName="check" size="48" color="white" style={buttons.submit} />
            <TextButton title="Terug" onPress={() => object.navigation.navigate('Materiaal List')} />


        </View>
    )
}