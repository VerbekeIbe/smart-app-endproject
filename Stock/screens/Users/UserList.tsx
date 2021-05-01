import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import UserListItem from '../../components/UserListItem'
import Lener from '../../models/Lener'

const URL = 'http://localhost:5000/leners';


const UserList = () => {
    const [data, setData] = useState<Lener[]>([]);
    

    useEffect(() => {
        fetch(URL).then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => alert(error));
    })

    return (
            
            <SafeAreaView>
                <FlatList data={data} keyExtractor={({lenerId}, index) => lenerId}
                renderItem={({item}) =>(
                        <Text>
                        {item.naam}
                        {item.voornaam}
                        </Text>
                        )}
                />

                
            </SafeAreaView>
        
    );
};

export default UserList;
