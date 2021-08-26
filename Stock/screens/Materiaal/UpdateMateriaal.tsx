import React from 'react'
import { useEffect } from 'react';
import { Alert, View, Text } from 'react-native';
import TextButton from '../../components/TextButton';
import { deleteData } from '../../utils/DataHandler'
import { buttons } from '../../styles/components/buttons';
import { font } from '../../styles/font';

const UpdateMateriaal = ({ navigation, route }: any) => {
    const edit = () => {
        console.log(route.params)
        navigation.navigate('Edit Materiaal', route.params);
    }

    const lost = () => {
        navigation.navigate('Lost Materiaal', route.params)
    }

    const more = () => {
        navigation.navigate('Bought Materiaal', route.params)
    }

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




    useEffect(() => {
        console.log("Update Materiaal")
        console.log(route.params)
    }
        , [])




    return (
        <>
        <View style={{justifyContent: 'center', height: '100%', paddingHorizontal: 20}}>
        <Text style={font.title}>{route.params.naam}</Text>
            <TextButton style={buttons.confirm_lg} title="Ik heb meer aangekocht" onPress={() => more() } />
            <TextButton style={buttons.confirm_lg} title="Er is iets weg" onPress={() =>  lost()} />
            <TextButton style={buttons.confirm_lg} title="Bewerken" onPress={() =>  edit() } />
            <TextButton style={buttons.delete_lg} title="Verwijderen" onPress={() =>  alertDeleteMateriaal() } />
        </View>
        </>
    )
}

export default UpdateMateriaal;