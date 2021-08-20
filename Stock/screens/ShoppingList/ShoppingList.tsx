import React, { useState, useCallback, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import ShoppingListItem from '../../components/ShoppingListItem';
import Materiaal from '../../models/Materiaal';
import { getData, getShoppingList } from '../../utils/DataHandler';
import { createMateriaalObject } from '../../utils/ObjectCreation/CreateObject';
import LoadingScreen from '../../components/LoadingScreen';
import { font } from '../../styles/font';

export default function ShoppingList({navigation}: any) {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Materiaal[]>([]);

    const getList = async function () {
        const endpoint = "materiaal/shoppinglist"
        let rawData = await getShoppingList({ endpoint})
        const shoppingList: Materiaal[] = [];
        if(rawData != []){
            for (let object of rawData) {
                shoppingList.push(createMateriaalObject(object))
            }
            setData(shoppingList);
        }
    
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
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
           <Text> We hebben niets tekort voor het moment! Good job! </Text>
        </View>
    )
    else return (
        <ScrollView>
            <View style={{ marginTop: 20 }}>
                {data.map((l: Materiaal) => (
                    <ShoppingListItem key={l.materiaalId} object={l} navigation={navigation} />
                ))}
            </View>
        </ScrollView>
    )
}
