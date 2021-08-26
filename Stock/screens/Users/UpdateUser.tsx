import React, { useState } from 'react'
import { Text, TextInput, View, Alert } from 'react-native'
import { postData, deleteData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'
import { font } from '../../styles/font';
import { form } from '../../styles/components/form';
import { buttons } from '../../styles/components/buttons'


const UpdateUser = (object: any) => {
    const [name, setName] = useState(object.route.params.naam);
    const [firstName, setFirstName] = useState(object.route.params.voornaam);
    const [email, setEmail] = useState(object.route.params.email);

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
            lenerId: object.route.params.lenerId,
            naam: name,
            voornaam: firstName,
            email: email
        }
        console.log(requestBody)
        console.log(endpoint)
        postData({ endpoint, requestBody })

        object.navigation.navigate("Users");
    };


    const alertDeleteUser = () =>
        Alert.alert(
            "Gebruiker verwijderen",
            "Weet je het zeker? Deze actie is onomkeerbaar.",
            [
                {
                    text: "Annuleren",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Verwijderen", onPress: () => deleteUser() }
            ]
        );

    const deleteUser = () => {
        const endpoint = "leners"
        const id = object.route.params.lenerId

        deleteData({ endpoint, id })
        object.navigation.navigate("Users");
    }



    return (
        <View style={{ flexDirection: 'column', paddingHorizontal: 24, paddingVertical: 48, justifyContent: 'space-between', height: '100%' }}>

            <View>
                <Text style={font.subTitle}>Naam:</Text>
                <TextInput onChangeText={text => setName(text)} value={name} style={form.input} />
                <Text style={font.subTitle}>Voornaam:</Text>
                <TextInput onChangeText={text => setFirstName(text)} value={firstName} style={form.input} />
                <Text style={font.subTitle}>Email:</Text>
                <TextInput keyboardType="email-address" onChangeText={text => setEmail(text)} value={email} style={form.input} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 24, alignItems: 'center' }}>

                <TextButton style={buttons.delete_form} title="Verwijderen" onPress={() => alertDeleteUser()} />
                <TextButton style={buttons.confirm_form} title="Opslaan" onPress={() => validateSubmit()} />

            </View>



        </View>
    )
}

export default UpdateUser;