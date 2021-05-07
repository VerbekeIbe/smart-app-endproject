import React, {useState, useCallback, useEffect} from 'react'
import { ScrollView, View } from 'react-native'
import { useFocusEffect} from '@react-navigation/native'
import ShoppingListItem from '../../components/ShoppingListItem';
import Materiaal from '../../models/Materiaal';
import { getData } from '../../utils/DataHandler';
import { createMateriaalObject } from '../../utils/ObjectCreation/CreateObject';
import LoadingScreen from '../../components/LoadingScreen';
import { font } from '../../styles/generic';

export default function ShoppingList() {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Materiaal[]>([]);

    const getList = async function (){
        const endpoint = "materiaal/shoppinglist"
        const categorie = ""
        let rawData = await getData({endpoint, categorie})
            const materiaalList : Materiaal[] = [];
            for(let object of rawData){
                materiaalList.push(createMateriaalObject(object))
            }
            setData(materiaalList);

            setLoading(false);
            
    };

    useFocusEffect(
        useCallback(() => {
          setLoading(true)
          getList()
        }, [])
      );




      if(loading) return (
        <LoadingScreen/>
    )
     else if (data.length < 1) return (
        <View style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'}}>
        We hebben niets tekort voor het moment! Good job boys (and girls)
        </View>
     )
     else return (
        <ScrollView>
            <View style={{marginTop: 20}}>
                { data.map((l: Materiaal) => (
                    <ShoppingListItem key={l.materiaalId} object={l}/>
                ))}
            </View>
            </ScrollView>
    )
}
