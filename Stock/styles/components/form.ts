import { StyleSheet } from "react-native";
import { neutral, theme } from "../colors";

export const form = StyleSheet.create({
    basic: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30
 
    },
    input: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 2,
        marginBottom: 10,
        borderColor: neutral[900],
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        
        height: 50,
        
        padding: 10,
        backgroundColor: neutral[100]
    },
    input_error: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 2,
        marginBottom: 10,
        borderColor: theme['gamma'],
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        
        height: 50,
        
        padding: 10,
        backgroundColor: neutral[300]
    },
});