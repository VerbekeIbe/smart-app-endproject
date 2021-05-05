import React, {useState, useEffect} from 'react'
import { ActivityIndicator, View, RecyclerViewBackedScrollViewBase, Button, ScrollView } from 'react-native'
import UserListItem from '../../components/UserListItem'
import Lener from '../../models/Lener'
import {createLenerObject} from '../../utils/ObjectCreation/CreateObject'


const URL = 'http://localhost:5000/leners';



const UserList = ({navigation}: any) => {
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
            <ScrollView>
                <Button title="Add" onPress={() => {navigation.navigate('Add User')}} />
                { data.map((l: Lener) => (
                    <UserListItem key={l.lenerId} object={l} navigation={navigation}/>
                ))}

            </ScrollView>   
    );
};

export default UserList;
