import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native';
import { postData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'

import { font } from '../../styles/font';
import { form } from '../../styles/components/form';
import { buttons } from '../../styles/components/buttons';


export default function AddUser(object: any) {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");



    const validateSubmit = () => {
        if (name == "" ||
            firstName == "" ||
            email == "") {
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
        const endpoint = "leners/update"
        const requestBody = {
            naam: name,
            voornaam: firstName,
            email: email
        }

        console.log(requestBody)
        console.log(endpoint)
        postData({ endpoint, requestBody })
        object.navigation.navigate("Users");
    };

    return (
        <View style={{ flexDirection: 'column', paddingHorizontal: 24, paddingVertical: 48, justifyContent: 'space-between', height: '100%' }}>
            <View>
                <Text style={font.subTitle}>
                    Naam:
                </Text>
                <TextInput onChangeText={text => setName(text)} value={name} style={form.input} />
                <Text style={font.subTitle}>
                    Voornaam:
                </Text>
                <TextInput onChangeText={text => setFirstName(text)} value={firstName} style={form.input} />
                <Text style={font.subTitle}>
                    Email:
                </Text>
                <TextInput keyboardType="email-address" onChangeText={text => setEmail(text)} value={email} style={form.input} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 24, alignItems: 'center', paddingVertical: 24 }}>
                <TextButton style={buttons.confirm_lg} title="Opslaan" onPress={() => validateSubmit()} />
            </View>




        </View>
    )
}
