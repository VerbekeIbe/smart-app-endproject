import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { postData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'
import IconButton from '../../components/IconButton'

import {form, buttons, font} from '../../styles/generic'


export default function AddUser(object: any) {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const submit = () => {
        const endpoint = "leners/update"
        const requestBody = {
            naam: name,
            voornaam: firstName,
            email: email
        }

        console.log(requestBody)
        console.log(endpoint)
        postData({endpoint, requestBody})
        object.navigation.navigate("Users");
    };

    return (
        <View style={form.basic}>
            <Text style={font.title}>
                Naam:
            </Text>
            <TextInput onChangeText={text => setName(text)} value={name} style={form.input}/>
            <Text style={font.title}>
                Voornaam:
            </Text>
            <TextInput onChangeText={text => setFirstName(text)} value={firstName} style={form.input}/>
            <Text style={font.title}>
                Email:
            </Text>
            <TextInput onChangeText={text => setEmail(text)} value={email} style={form.input}/>

            <IconButton onPress={() => submit()} iconName="check" size="48" color="white" style={buttons.submit} />
            <TextButton title="Terug" onPress={() => object.navigation.navigate('Users') } />
        </View>
    )
}
