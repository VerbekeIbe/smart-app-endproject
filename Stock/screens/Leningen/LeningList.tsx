import React, { useState, useCallback } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import LeningListItem from '../../components/LeningListItem';
import Lening from '../../models/Lening';
import { createLeningObject } from '../../utils/ObjectCreation/CreateObject';
import LoadingScreen from '../../components/LoadingScreen';
import { font } from '../../styles/font';
import { getLeningen } from '../../utils/DataHandler';


const endpoint = "http://localhost:5000/lening/pending";

const LeningList = ({navigation}: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Lening[]>([]);


    const getList = async function () {
        const endpoint = "lening/pending";
        let rawData = await getLeningen({endpoint});
        const leningList: Lening[] = [];
        for (let user of rawData) {
            leningList.push(createLeningObject(user))
        }
        setData(leningList);

        setLoading(false)
    };
    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            getList()
        }, [])
    );

    if (loading) return (
        <LoadingScreen />
    )
    else if (data.length < 1) return (
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={font.title}> Geen open leningen gevonden</Text>
        </View>
    )
    else return (
        <ScrollView>
            <View style={{ marginTop: 20 }}>

                {data.map((l: Lening) => (
                    <LeningListItem key={l.leningId} object={l} navigation={navigation}/>
                ))}
            </View>

        </ScrollView>
    )
}

export default LeningList;
