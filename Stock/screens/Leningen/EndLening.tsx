import React from 'react'
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import TextButton from '../../components/TextButton'
import { buttons } from '../../styles/components/buttons';
import { postEndLening } from '../../utils/DataHandler';

const EndLening = ({ route, navigation }: any) => {


    const closeLening = () => {

        const endpoint = "lening/close"
        const id = route.params.leningId
        postEndLening({ endpoint, id })

        navigation.navigate('Lening List');


    }

    const editMateriaal = () => {

        closeLening();
        navigation.navigate('Lost Materiaal', route.params.materiaal);



    }

    useEffect(() => {
        console.log(route.params)
    }, [])



    return (
        <>
        <View style={{justifyContent: 'center', height: '100%'}}>
            <TextButton style={buttons.confirm_lg} title="Alles is teruggebracht" onPress={() => closeLening()} />
            <TextButton style={buttons.confirm_lg} title="Er is iets weg." onPress={() => editMateriaal()} />
        </View>
        </>
    )
}

export default EndLening;
