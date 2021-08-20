import React from 'react'
import { useEffect, useState } from 'react';
import TextButton from '../../components/TextButton'
import { postEndLening } from '../../utils/DataHandler';

const EndLening = ({ route, navigation }: any) => {
    const [kwijt, setKwijt] = useState<boolean>(false);



    const closeLening = () => {

        const endpoint = "lening/close"
        const id = route.params.leningId
        postEndLening({ endpoint, id })
        if(!kwijt){
            navigation.navigate('Lening List');
        }
        
    }

    const editMateriaal = () => {
        setKwijt(true);
        
        navigation.navigate('Lost Materiaal',route.params.materiaal);
        closeLening();


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
