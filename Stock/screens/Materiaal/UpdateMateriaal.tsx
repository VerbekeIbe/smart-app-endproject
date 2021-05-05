import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Button } from 'react-native'

const UpdateMateriaal = (object: any) => {
    const [name, setName] = useState(object.route.params.naam);
    const [threshold, setThreshold] = useState(object.route.params.drempel);
    const [stock, setStock] = useState(object.route.params.stock);
    const [categorie, setCategorie] = useState(object.route.params.categorie);

    const submit = (props: any) => {
        console.log(props)
        console.log(object.route.params.materiaalId)
    };


    return (
        <View>
           <Text>
            Update Materiaal {object.route.params.naam},
            {object.route.params.stock},{object.route.params.drempel}
            </Text> 
            <TextInput onChangeText={text => setName(text)} value={name}/>
            <TextInput onChangeText={text => setThreshold(text)} value={threshold}/>
            <TextInput onChangeText={text => setStock(text)} value={stock}/>
            <TextInput onChangeText={text => setCategorie(text)} value={categorie}/>

            <Button title="Submit" onPress={() => submit({name, threshold, categorie, stock}) } />
            <Button title="Cancel" onPress={() => object.navigation.navigate('Materiaal List') } />
        </View>
        )
}

export default UpdateMateriaal;