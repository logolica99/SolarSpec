import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';


export default function NavBar({ navigation, setHomeScreen, setDataScreen, setAreaDialog,setArea,setShowSaveList }) {
    return (
        <View style={styles.Navbar}>
            <TouchableHighlight style={styles.home} underlayColor='#ffffff80' onPress={() => { navigation.navigate("Home"); setHomeScreen(true); setDataScreen(false); setAreaDialog(false);setArea(0) }}>



                <Text style={styles.navButton}>Home</Text>

            </TouchableHighlight>
            <View style={styles.gap}></View>
            <TouchableHighlight style={styles.saved} underlayColor='#ffffff80' onPress={() => { navigation.navigate("Saved");setShowSaveList(true) }}>


                <Text style={styles.navButton} >Saved</Text>

            </TouchableHighlight>


        </View>

    )
}

const styles = StyleSheet.create({
    Navbar: {
        backgroundColor: "#6941D9",
        flexDirection: "row",

        alignItems: "center",
        height: 50,
    },
    navButton: {
        fontFamily: "montserrat-bold",
        fontSize: 16,
        color: "white",
    },
    home: {

        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",

    },
    gap: {
        backgroundColor: "white",

        height: 20,
        padding: 1,
    },
    saved: {
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    }
})