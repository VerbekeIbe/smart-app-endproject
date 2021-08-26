import { StyleSheet } from "react-native";
import { theme } from "../colors";

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

    },
    delete: {
        backgroundColor: theme['gamma'],
        paddingHorizontal: 12,
        marginHorizontal: 25,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign: 'center',
        alignItems: 'center',
    },delete_form: {
        backgroundColor: theme['gamma'],
        paddingHorizontal: 12,
        marginHorizontal: 12,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign: 'center',
        alignItems: 'center',
    },
    confirm: {
        backgroundColor: theme['alpha'],
        paddingHorizontal: 12,
        marginHorizontal: 25,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign: 'center',
        alignItems: 'center',
    },
    confirm_form: {
        backgroundColor: theme['alpha'],
        width: '50%',
        paddingHorizontal: 12,
        marginHorizontal: 12,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign: 'center',
        alignItems: 'center',
    }, 
    confirm_card: {
        backgroundColor: theme['alpha'],
        paddingHorizontal: 24,
        padding: 8,
        borderRadius: 6,
        textAlign: 'center',
    }, 
    confirm_lg: {
        backgroundColor: theme['alpha'],
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 25,
        marginVertical: 20,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 24
    },
     delete_lg: {
        backgroundColor: theme['gamma'],
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 25,
        marginVertical: 20,
        padding: 8,
        borderRadius: 6,
        margin: "auto",
        textAlign: 'center',
        alignItems: 'center',
    }


});