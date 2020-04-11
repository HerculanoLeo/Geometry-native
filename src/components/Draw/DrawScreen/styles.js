import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {

    },
    footerConstainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    footerButton: {
        height: 35,
        width: 100,
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#ffffff",
        elevation: 10,
    },
    buttonRed: {
        backgroundColor: "red"
    },
    yellowButton:{
        backgroundColor: "yellow"
    },
    greenButton: {
        backgroundColor: "green"
    }
})

export default Styles;