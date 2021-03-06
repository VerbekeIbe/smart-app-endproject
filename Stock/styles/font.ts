import { StyleSheet } from "react-native";
import { neutral } from "./colors";

export const font = StyleSheet.create({
    normal: {
        fontSize: 18,
        fontWeight: '400',
        overflow: 'hidden',
        color: neutral[900]
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: neutral[900],
        marginBottom: 15
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: neutral[900],
        marginBottom: 15
    },
    digit: {
        fontSize: 26,
        fontWeight: '400',
        color: neutral[900]
    }
});