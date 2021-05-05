import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Button } from 'react-native'


const UpdateUser = ( object: any )=> {
    const [name, setName] = useState(object.route.params.naam);
    const [firstName, setFirstName] = useState(object.route.params.voornaam);
    const [email, setEmail] = useState(object.route.params.email);

    const submit = (props: any) => {
        console.log(props)
        console.log(object.route.params.lenerId)
    };



    return (
        <View>
            <Text>
                user update {object.route.params.voornaam}
            </Text>
            <TextInput onChangeText={text => setName(text)} value={name}/>
            <TextInput onChangeText={text => setFirstName(text)} value={firstName}/>
            <TextInput onChangeText={text => setEmail(text)} value={email}/>

            <Button title="Submit" onPress={() => submit({name, firstName, email}) } />
            <Button title="Cancel" onPress={() => object.navigation.navigate('Users') } />
        </View>
    )
}

export default UpdateUser;