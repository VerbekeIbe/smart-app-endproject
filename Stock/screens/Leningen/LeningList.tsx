import React, {useState, useEffect} from 'react'
import { Text, View, ScrollView } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import LeningListItem from '../../components/LeningListItem';
import Lening from '../../models/Lening';
import { createLeningObject } from '../../utils/ObjectCreation/CreateObject';

const URL="http://localhost:5000/lening/pending";

const LeningList = () => {
    const [data, setData] = useState<Lening[]>([]);


    const getData = async function (){
        let rawData =  await fetch(URL).then((response) => response.json())
            const leningList : Lening[] = [];
            for(let user of rawData){
                leningList.push(createLeningObject(user))
            }
            setData(leningList);  
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollView>
            
                { data.map((l: Lening) => (
                    <LeningListItem key={l.leningId} object={l} />
                ))}
               
        </ScrollView>
    )
}

export default LeningList;
