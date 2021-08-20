import React from 'react'
import { useEffect } from 'react';
import TextButton from '../../components/TextButton'
import { postEndLening } from '../../utils/DataHandler';

const EndLening = ({ route, navigation }: any) => {
    const closeLening = () => {

        const endpoint = "lening/close"
        const id = route.params.leningId
        postEndLening({ endpoint, id })
        navigation.navigate('Lening List');
    }

    const editMateriaal = () => {
        navigation.navigate('Lost Materiaal',route.params.materiaal)
    }

    useEffect(() => {
        console.log(route.params)
    }, [])



    return (
        <>
            <TextButton title="Alles is teruggebracht" onPress={() => closeLening()} />
            <TextButton title="Er is iets weg." onPress={() => editMateriaal()} />

        </>
    )
}

export default EndLening;
