import { StyleSheet } from "react-native";
import colors from "../colors";

export const buttons = StyleSheet.create({
    neutral: {
        backgroundColor: colors.beta,
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
        shadowRadius: 13.97,

        elevation: 21,

    }, filter: {
        backgroundColor: colors.beta,
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
        shadowRadius: 13.97,

        elevation: 21,
    },
    delete: {
        backgroundColor: colors.delete,
        padding: 7,
        borderRadius: 6,
        margin: "auto"
    },
    submit: {
        backgroundColor: colors.headerbg,
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
        shadowRadius: 13.97,

        elevation: 21,
    },
    alternative: {
        backgroundColor: colors.headerbg,
        paddingHorizontal: 12,
        marginHorizontal: 25,
        padding: 8.5,
        borderRadius: 6,
        margin: "auto"
    },
    add: {
        backgroundColor: colors.headerbg,
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
        shadowRadius: 13.97,

        elevation: 21,
    },
    back: {

    }

});