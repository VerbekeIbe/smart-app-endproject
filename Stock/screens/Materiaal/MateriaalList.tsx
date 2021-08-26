import React, { useState, useCallback, useEffect } from 'react'
import { Text, ScrollView, View, Button } from 'react-native'
import MateriaalListItem from '../../components/MateriaalListItem';
import Materiaal from '../../models/Materiaal';
import { Picker } from '@react-native-picker/picker';
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
    const [selectedData, setSelectedData] = useState("All")

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

    useEffect(() => {
        if(selectedData == "All"){
            getList("")
        }else{
            getList(selectedData)
        }
    },[selectedData])

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
            
            <Picker
            selectedValue={selectedData}
            onValueChange={itemValue => setSelectedData(itemValue.toString())}
            >
                <Picker.Item key={"All"} label={"All"} value={"All"} />
                <Picker.Item key={"Groot"} label={"Groot"} value={"Groot"} />
                <Picker.Item key={"Klein"} label={"Klein"} value={"Klein"} />
                <Picker.Item key={"Bar"} label={"Bar"} value={"Bar"} />
                <Picker.Item key={"Keuken"} label={"Keuken"} value={"Keuken"} />
                
            </Picker>
            <View>
                {data.map((l: Materiaal) => (
                    <MateriaalListItem key={l.materiaalId} object={l} navigation={navigation} />
                ))}
                <TextButton title="Materiaal Toevoegen" onPress={() => navigation.navigate("Add Materiaal")} style={buttons.confirm_lg} />
            </View>
        </ScrollView>

    )
}

export default MateriaalList;