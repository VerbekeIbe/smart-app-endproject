import React, { useState, useCallback } from 'react'
import { Text, ScrollView, View, Button } from 'react-native'
import MateriaalListItem from '../../components/MateriaalListItem';
import Materiaal from '../../models/Materiaal';
import LoadingScreen from '../../components/LoadingScreen'
import { createMateriaalObject } from '../../utils/ObjectCreation/CreateObject';
import { getData } from '../../utils/DataHandler'
import { useFocusEffect } from '@react-navigation/native'
import TextButton from '../../components/TextButton'
import IconButton from '../../components/IconButton'

import { font } from '../../styles/font';
import { buttons } from '../../styles/components/buttons';




const MateriaalList = ({ navigation }: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Materiaal[]>([]);



    const getList = async function (categorie: string) {
        const endpoint = "materiaal"

        let rawData = await getData({ endpoint, categorie })
        const materiaalList: Materiaal[] = [];
        for (let object of rawData) {
            materiaalList.push(createMateriaalObject(object))
        }
        setData(materiaalList);
        setLoading(false);

    };



    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            getList("")
        }, [])
    );


    if (loading) return (
        <LoadingScreen />
    )
    else if (data.length < 1) return (
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={font.title}> Geen materiaal gevonden...</Text>
        </View>
    )
    else return (
        <ScrollView>
            {/* <TextButton title="+" onPress={() => navigation.navigate("Add Materiaal")} /> */}
            <View style={{ flexDirection: "row", margin: "auto", justifyContent: "space-evenly" }}>
                <TextButton title="All" onPress={() => getList("")} style={buttons.filter} />
                <TextButton title="Groot" onPress={() => getList("Groot")} style={buttons.filter} />
                <TextButton title="Klein" onPress={() => getList("Klein")} style={buttons.filter} />
                <TextButton title="Bar" onPress={() => getList("Bar")} style={buttons.filter} />
                <TextButton title="Keuken" onPress={() => getList("Keuken")} style={buttons.filter} />
            </View>
            <View>
                {data.map((l: Materiaal) => (
                    <MateriaalListItem key={l.materiaalId} object={l} navigation={navigation} />
                ))}
                <TextButton title="Materiaal Toevoegen" onPress={() => navigation.navigate("Add Materiaal")} style={buttons.add} />
            </View>
        </ScrollView>

    )
}

export default MateriaalList;