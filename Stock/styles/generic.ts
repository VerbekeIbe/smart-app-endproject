import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({});



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
        shadowRadius: 13.97,

        elevation: 21,
    }
});


export const buttons = StyleSheet.create({
    neutral: {
        backgroundColor: colors.beta,
        padding: 7,
        borderRadius: 6,
        height:40,
        width:40,

        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13.97,

    elevation: 21,
        
    },filter: {
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
        display:'flex',
        alignSelf:'center',

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

});

export const loading = StyleSheet.create({
    neutral: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});

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
        backgroundColor: colors.listbg
    }
});

export const font = StyleSheet.create({
    normal: {
        fontSize: 18 ,
        fontWeight: '400',
        overflow: 'hidden'
        

    },
    title: {
        fontSize: 18 ,
        fontWeight: '600',
        color: colors.light,
        marginBottom: 15
    },
    selectedItem: {
        fontSize: 20 ,
        fontWeight: "bold",
        color: colors.light,
        marginBottom: 30
    },
    listTitle: {
        fontSize: 18,
        fontWeight: "bold",
        
       
        
    }
});

export const info = StyleSheet.create({
    materiaal: {
        paddingBottom: 25
    }
    });
