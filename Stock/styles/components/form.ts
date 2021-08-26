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
        marginTop: 10,
        marginBottom: 10,
        
        height: 40,
        borderRadius: 5,
        padding: 10,
        backgroundColor: neutral[300]
    }
});