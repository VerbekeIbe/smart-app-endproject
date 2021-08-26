import React from 'react'
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

const IconButton = ({onPress, iconName, style, size, color}: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <MaterialIcons name={iconName} size={size} color={color} style={{fontSize: 24}}/>
        </TouchableOpacity>
    )
}

export default IconButton;
