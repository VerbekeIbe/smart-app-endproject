import React, { useState, useCallback } from 'react'
import {  View, Text, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import UserListItem from '../../components/UserListItem'
import Lener from '../../models/Lener'
import LoadingScreen from '../../components/LoadingScreen';
import { createLenerObject } from '../../utils/ObjectCreation/CreateObject'
import { getData } from '../../utils/DataHandler'
import TextButton from '../../components/TextButton'

import { font } from '../../styles/font';
import { buttons } from '../../styles/components/buttons'

const URL = 'http://localhost:5000/leners';



const UserList = ({ navigation }: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Lener[]>([]);

    const getList = async function () {
        const endpoint = "leners"
        const categorie = ""
        let rawData = await getData({ endpoint, categorie })
        const userList: Lener[] = [];
        for (let user of rawData) {
            userList.push(createLenerObject(user))
        }
        setData(userList);

        setLoading(false);

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
            
            <Text style={font.title}> Geen gebruikers gevonden</Text>
        </View>

    )
    else return (
        <ScrollView>
            <View style={{ marginTop: 20 }}>
                {data.map((l: Lener) => (
                    <UserListItem key={l.lenerId} object={l} navigation={navigation} />
                ))}

                <TextButton title="Toevoegen" onPress={() => { navigation.navigate('Add User') }} style={buttons.confirm_lg} />
            </View>
        </ScrollView>
    );
};

export default UserList;
