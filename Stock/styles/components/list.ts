import { StyleSheet } from "react-native";
import {neutral, theme} from "../colors";

export const list = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        paddingVertical: 5,
        borderRadius: 6,
        backgroundColor: neutral[100],

        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 5
    }
});