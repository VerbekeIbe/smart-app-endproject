import { StyleSheet } from "react-native";
import colors from "./colors";

export const font = StyleSheet.create({
    normal: {
        fontSize: 18,
        fontWeight: '400',
        overflow: 'hidden'
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.light,
        marginBottom: 15
    },
    selectedItem: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.light,
        marginBottom: 30
    },
    listTitle: {
        fontSize: 18,
        fontWeight: "bold",
    }
});