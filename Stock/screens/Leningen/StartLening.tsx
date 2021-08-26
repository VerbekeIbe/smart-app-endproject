import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { getData, postData } from '../../utils/DataHandler'
import { createLenerObject } from '../../utils/ObjectCreation/CreateObject'
import Lener from '../../models/Lener';
import TextButton from '../../components/TextButton'

import { font } from '../../styles/font'
import { form } from '../../styles/components/form';
import { buttons } from '../../styles/components/buttons';
import LoadingScreen from '../../components/LoadingScreen';
import { neutral, theme } from '../../styles/colors';

export default function StartLening(object: any) {
    const [loading, setLoading] = useState<boolean>(false);
    const [leners, setLeners] = useState<Lener[]>([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [toLend, setToLend] = useState("0");

    const getUsers = async function () {
        const endpoint = "leners"
        const categorie = ""
        let rawData = await getData({ endpoint, categorie })
        const userList: Lener[] = [];
        for (let user of rawData) {
            userList.push(createLenerObject(user))
        }
        setLeners(userList);
        setSelectedUser(userList[0].lenerId)
        setLoading(false);
    };


    useEffect(() => {
        setLoading(true)
        getUsers();
        console.log(object.route.params.stock)
    }, []);

    const submit = () => {
        const endpoint = "lening"
        const requestBody = {
            hoeveelheid: toLend,
            materiaalId: object.route.params.materiaalId,
            lenerId: selectedUser
        }
        postData({ endpoint, requestBody })

        object.navigation.navigate("Materiaal List");
    };

    if (loading) return (
        <LoadingScreen />
    ); else return (
        <View style={{flexDirection: 'column', paddingHorizontal: 24, paddingVertical: 48, justifyContent:'space-between', height:'100%'}}>
            <View>
                <Text style={font.title}>{object.route.params.naam}</Text>


                <Text style={font.subTitle}>Wie leent er?</Text>
                <Picker
                    selectedValue={selectedUser}
                    onValueChange={itemValue => setSelectedUser(itemValue.toString())}
                    style={form.input}
                >
                    {leners.map((l: Lener) => (
                        <Picker.Item key={l.lenerId} label={`${l.voornaam} ${l.naam}`} value={l.lenerId} />
                    ))}
                </Picker>

                <Text style={font.subTitle}>Hoeveel leen je?</Text>

                <View  style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginHorizontal: 24}}>
                <Slider
                    onValueChange={value => setToLend(value.toString())}
                    step={1}
                    style={{ width: '85%', height: 80 }}
                    minimumValue={0}
                    maximumValue={object.route.params.stock}
                    minimumTrackTintColor={theme['alpha']}
                    maximumTrackTintColor={neutral[900]}
                    thumbTintColor={theme['alpha']} 
                />
                <Text style={font.subTitle}>
                    {toLend}
                </Text>
                </View>

                
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TextButton title="Bevestigen" onPress={() => submit()} style={buttons.confirm_form} />
            </View>



            
        </View>
    )
}
