import { StyleSheet } from "react-native";
import {neutral, theme} from "../colors";

export const buttons = StyleSheet.create({
    edit: {
        backgroundColor: theme['beta'],
        padding: 7,
        borderRadius: 6,
        height: 40,
        width: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 14,

        elevation: 21,

    }, filter: {
        backgroundColor: theme['beta'],
        padding: 10,
        borderRadius: 25,
        marginVertical: 10,
        marginHorizontal: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14,

        elevation: 21,
    },
    delete: {
        backgroundColor: theme['gamma'],
        padding: 7,
        borderRadius: 6,
        margin: "auto"
    },
    submit: {
        backgroundColor: theme['alpha'],
        paddingHorizontal: 80,
        paddingVertical: 20,

        borderRadius: 6,
        display: 'flex',
        alignSelf: 'center',

        marginTop: 40,
        marginBottom: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.20,
        shadowRadius: 14,

        elevation: 21,
    },
    confirm: {
        backgroundColor: theme['alpha'],
        paddingHorizontal: 12,
        marginHorizontal: 25,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign:'center',
        alignItems: 'center',
    },confirm_lg: {
        backgroundColor: theme['alpha'],
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 25,
        marginVertical: 20,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign:'center',
        alignItems: 'center',
        fontSize: 24
    },delete_lg: {
        backgroundColor: theme['gamma'],
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 25,
        marginVertical: 20,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign:'center',
        alignItems: 'center',
    },
    add: {
        backgroundColor: theme['alpha'],
        padding: 15,
        paddingHorizontal: 50,
        borderRadius: 6,
        marginVertical: 15,
        margin: "auto",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.20,
        shadowRadius: 14,

        elevation: 21,
    },
    back: {

    }

});