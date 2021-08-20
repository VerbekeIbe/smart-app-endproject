import { ModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React from 'react'
import { useEffect } from 'react';
import { Button } from 'react-native';
import TextButton from '../../components/TextButton';
import Materiaal from '../../models/Materiaal'

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




    useEffect(() => {
        console.log("Update Materiaal")
        console.log(route.params)
    }
        , [])




    return (
        <>
            <TextButton title="Ik heb meer aangekocht" onPress={() => more() } />
            <TextButton title="Er is iets weg." onPress={() =>  lost()} />
            <TextButton title="Bewerken" onPress={() =>  edit() } />
        </>
    )
}

export default UpdateMateriaal;