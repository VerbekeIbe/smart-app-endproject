import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Slider from '@react-native-community/slider';
import TextButton from '../../components/TextButton';
import { postData } from '../../utils/DataHandler';
import { font } from '../../styles/font';
import { buttons } from '../../styles/components/buttons';
import { neutral, theme } from '../../styles/colors';

const LostMateriaal = ({ route, navigation }: any) => {
    const [stock, setStock] = useState(route.params.stock);
    const [less, setLess] = useState(0);

    const submitLost = () => {
        let newAmount = stock - less;

        const endpoint = "materiaal/update"
        const requestBody = {
            materiaalId: route.params.materiaalId,
            naam: route.params.naam,
            stock: newAmount,
            categorie: route.params.categorie,
            drempel: route.params.drempel
        }

        console.log(requestBody);
        postData({ endpoint, requestBody })

        navigation.navigate("Materiaal List");
    };


    return (

        <>
            <View style={{flexDirection: 'column', paddingHorizontal: 24, paddingVertical: 48, justifyContent:'space-between', height:'100%'}}>
                <View>
                    <Text style={font.title}>{route.params.naam}</Text>
                    <Text style={font.subTitle}>Hoeveel zijn er weg?</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginHorizontal: 24}}>
                    <Slider
                        onValueChange={value => setLess(value)}
                        step={1}
                        style={{ width: '85%', height: 80 }}
                        minimumValue={0}
                        maximumValue={route.params.stock}
                        minimumTrackTintColor={theme['alpha']}
                        maximumTrackTintColor={neutral[900]}
                        thumbTintColor={theme['alpha']} />
                    <Text style={font.subTitle}>
                        {less}
                    </Text>
                    </View>
                    
                </View>

                <View>
                <TextButton style={buttons.confirm_lg} title="Opslaan" onPress={() => submitLost()} />
                </View>



                
            </View>
        </>


    )
};

export default LostMateriaal;
