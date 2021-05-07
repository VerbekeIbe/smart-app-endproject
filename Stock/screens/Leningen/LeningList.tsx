import React, {useState,useCallback, useEffect} from 'react'
import { Text, View, ScrollView } from 'react-native'
import { useFocusEffect} from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import LeningListItem from '../../components/LeningListItem';
import Lening from '../../models/Lening';
import { createLeningObject } from '../../utils/ObjectCreation/CreateObject';
import LoadingScreen from '../../components/LoadingScreen';
import { font } from '../../styles/generic';


const URL="http://localhost:5000/lening/pending";

const LeningList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Lening[]>([]);


    const getList = async function (){
        let rawData =  await fetch(URL).then((response) => response.json())
            const leningList : Lening[] = [];
            for(let user of rawData){
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

    if(loading) return (
        <LoadingScreen/>
    )
     else if (data.length < 1) return (
        <View style={{flexDirection:'row',flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={font.title}> Geen open leningen gevonden</Text>
        </View>
     )
     else return (
        <ScrollView>
            <View style={{marginTop: 20}}>
            
                { data.map((l: Lening) => (
                    <LeningListItem key={l.leningId} object={l} />
                ))}
                </View>
               
        </ScrollView>
    )
}

export default LeningList;
