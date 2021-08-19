import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { postData, deleteData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'
import IconButton from '../../components/IconButton'

import { font } from '../../styles/generic'
import { buttons } from '../../styles/components/buttons';
import { form } from '../../styles/components/form';


const EditMateriaal = ({route, navigation} : any) => {
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

    const deleteMateriaal = () => {
        const endpoint = "materiaal"
        const id = route.params.materiaalId

        deleteData({ endpoint, id })
        navigation.navigate("Materiaal List");
    }



    return (
        <>
        <View style={form.basic}>
            <Text style={font.title}>Naam:</Text>
            <TextInput onChangeText={text => setName(text)} value={name} style={form.input} />
            <Text style={font.title}>Categorie:</Text>
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
            <Text style={font.title}>Hoeveelheid:</Text>
            <TextInput keyboardType="numeric" onChangeText={text => setStock(text.replace(/[^0-9]/g, ''))} value={stock} style={form.input} />

            <Text style={font.title}>Drempel:</Text>
            <TextInput onChangeText={text => setThreshold(text.replace(/[^0-9]/g, ''))} value={threshold} style={form.input} />


            <IconButton onPress={() => submit()} iconName="check" size="600" color="white" style={buttons.submit} />

            <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between' }}>
                <TextButton title="Terug" onPress={() => navigation.navigate('Materiaal List')} />
                <TextButton title="Verwijderen" onPress={() => deleteMateriaal()} />
            </View>
        </View>
        </>
    )
}

export default EditMateriaal;