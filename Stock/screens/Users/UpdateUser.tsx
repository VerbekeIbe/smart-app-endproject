import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Button } from 'react-native'
import { postData, deleteData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'
import IconButton from '../../components/IconButton'
import {form, font, buttons} from '../../styles/generic'


const UpdateUser = (object: any) => {
    const [name, setName] = useState(object.route.params.naam);
    const [firstName, setFirstName] = useState(object.route.params.voornaam);
    const [email, setEmail] = useState(object.route.params.email);

    const submit = () => {
        const endpoint = "leners/update"
        const requestBody = {
            lenerId: object.route.params.lenerId,
            naam: name,
            voornaam: firstName,
            email: email
        }

        console.log(requestBody)
        console.log(endpoint)
        postData({endpoint, requestBody})

        object.navigation.navigate("Users");
    };

    const deleteUser = () => {
        const endpoint = "leners"
        const id = object.route.params.lenerId

        deleteData({endpoint, id})
        object.navigation.navigate("Users");
    }



    return (
        <View style={form.basic}>
            <Text style={font.title}>Naam:</Text>
            <TextInput onChangeText={text => setName(text)} value={name} style={form.input}/>
            <Text style={font.title}>Voornaam:</Text>
            <TextInput onChangeText={text => setFirstName(text)} value={firstName} style={form.input} />
            <Text style={font.title}>Email:</Text>
            <TextInput onChangeText={text => setEmail(text)} value={email} style={form.input}/>

            <IconButton onPress={() => submit()} iconName="check" size="48" color="white" style={buttons.submit}/>

            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
            <TextButton title="Terug" onPress={() => object.navigation.navigate('Users')} />
            <TextButton title="Verwijderen" onPress={() => deleteUser()} />
            </View>
        </View>
    )
}

export default UpdateUser;