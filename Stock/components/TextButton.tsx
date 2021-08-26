import React from 'react'
import { TouchableOpacity, Text } from "react-native";
import {neutral} from '../styles/colors';

const TextButton = ({onPress, title, style}: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={{color: neutral[100], fontWeight: '600', fontSize: 22}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton;
