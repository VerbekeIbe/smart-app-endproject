import React from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from '../styles/colors';

const TextButton = ({onPress, title, style}: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={{color: colors.light, fontWeight: '600', fontSize: 18}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton;
