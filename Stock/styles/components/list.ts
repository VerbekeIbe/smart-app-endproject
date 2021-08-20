import { StyleSheet } from "react-native";
import colors from "../colors";

export const list = StyleSheet.create({
    listItem: {
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        paddingVertical: 20,
        borderRadius: 6,
        backgroundColor: colors.listbg,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.20,
        shadowRadius: 14,

        elevation: 21,
    }
});