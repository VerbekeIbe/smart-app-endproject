import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, FlatList, ActivityIndicator, View, RecyclerViewBackedScrollViewBase } from 'react-native'
import UserListItem from '../../components/UserListItem'
import Lener from '../../models/Lener'
import {createLenerObject} from '../../utils/ObjectCreation/CreateObject'

const URL = 'http://localhost:5000/leners';


const UserList = () => {
    const [data, setData] = useState<Lener[]>([]);


    const getData = async function (){
        let rawData =  await fetch(URL).then((response) => response.json())
            const userList : Lener[] = [];
            for(let user of rawData){
                userList.push(createLenerObject(user))
            }
            setData(userList);
    
        
    };
    useEffect(() => {
        getData();
    }, []);

    return (
            <View>
                { data.map((l: Lener) => (
                    <UserListItem key={l.lenerId} voornaam={l.voornaam} naam={l.naam} email={l.email}/>
                ))}
            </View>

            // <Text>
            //     User page
            // </Text>
            
        
    );
};

export default UserList;
