import React, {useState, useEffect} from 'react'
import { ScrollView, View, Button } from 'react-native'
import MateriaalListItem from '../../components/MateriaalListItem';
import Materiaal from '../../models/Materiaal';
import { createMateriaalObject } from '../../utils/ObjectCreation/CreateObject';

const URL="http://localhost:5000/materiaal";

const MateriaalList = ({navigation}: any) => {
    const [data, setData] = useState<Materiaal[]>([]);


    const getData = async function (){
        let rawData =  await fetch(URL).then((response) => response.json())
            const materiaalList : Materiaal[] = [];
            for(let user of rawData){
                materiaalList.push(createMateriaalObject(user))
            }
            setData(materiaalList);
    };

    const getCategory = async function (categorie: string){
        let categoryData = await fetch(`${URL}/${categorie}`).then((response) => response.json())
            const materiaalList : Materiaal[] = [];
            for(let user of categoryData){
                materiaalList.push(createMateriaalObject(user))
            }
            setData(materiaalList);
    
    };

    useEffect(() => {
        getData();
    }, []);




    return (
        <ScrollView>
            <Button title="All" onPress={() => getData()} />
            <Button title="Groot" onPress={() => getCategory("Groot")} />
            <Button title="Klein" onPress={() => getCategory("Klein")} />
            <Button title="Bar" onPress={() => getCategory("Bar")} />
            <Button title="Keuken" onPress={() => getCategory("Keuken")} />
                { data.map((l: Materiaal) => (
                    <MateriaalListItem key={l.materiaalId} object={l} navigation={navigation}/>
                ))}
            </ScrollView>
    )
}

export default MateriaalList;