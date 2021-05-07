import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { getData, postData } from '../../utils/DataHandler'
import {createLenerObject} from '../../utils/ObjectCreation/CreateObject'
import Lener from '../../models/Lener';
import TextButton from '../../components/TextButton'
import IconButton from '../../components/IconButton'

import { buttons, font, form } from '../../styles/generic'
import LoadingScreen from '../../components/LoadingScreen';

export default function StartLening(object: any) {
    const [loading, setLoading] = useState<boolean>(false);
    const [leners, setLeners] = useState<Lener[]>([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [hoeveelheid, setHoeveelheid] = useState(0);

    const getUsers = async function (){
        const endpoint = "leners"
        const categorie = ""
        let rawData = await getData({endpoint, categorie})
            const userList : Lener[] = [];
            for(let user of rawData){
                userList.push(createLenerObject(user))
            }
            setLeners(userList);
            setSelectedUser(userList[0].lenerId)
            setLoading(false);   
    };


    useEffect(() => {
        setLoading(true)
        getUsers();
    }, []);

    const submit = () => {
        const endpoint = "lening"
        const requestBody = {
            hoeveelheid: hoeveelheid,
            materiaalId: object.route.params.materiaalId,
            lenerId: selectedUser
        }
        postData({ endpoint, requestBody })

        object.navigation.navigate("Materiaal List");
    };

    if(loading) return (
        <LoadingScreen/>
    ); else return (
        <View style={form.basic}>
            <Text style={font.selectedItem}>Je leent:     {object.route.params.naam}</Text>
            {/* <Text>{object.route.params.naam}</Text> */}
            
            <Text style={font.title}>Wie leent er?</Text>
        <Picker
        selectedValue={selectedUser}
        onValueChange={itemValue => setSelectedUser(itemValue)}
        style={form.input}
        >
            {leners.map((l: Lener) => (
                    <Picker.Item key={l.lenerId} label={`${l.voornaam} ${l.naam}`} value={l.lenerId} />
                ))}
        </Picker>

        <Text style={font.title}>Hoeveel leen je?</Text>
        <TextInput keyboardType="numeric" onChangeText={text => setHoeveelheid(text.replace(/[^0-9]/g, ''))} value={hoeveelheid} style={form.input} />

        <IconButton  onPress={() => submit()} iconName="check" size="48" color="white" style={buttons.submit}/>
        <TextButton title="Terug" onPress={() => object.navigation.navigate('Materiaal List')} style={buttons.back} />
    </View>
    )
}
