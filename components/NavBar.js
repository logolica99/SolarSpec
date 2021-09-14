import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


export default function NavBar({navigation}) {
    return (
        <View style={styles.Navbar}>
            <TouchableOpacity style={styles.home} onPress={() => { navigation.navigate("Home") }}>

             

                    <Text style={styles.navButton}>Home</Text>
           
            </TouchableOpacity>
            <View style={styles.gap}></View>
            <TouchableOpacity style={styles.saved} onPress={() => { navigation.navigate("Saved") }}>

    
                    <Text style={styles.navButton} >Saved</Text>
       
            </TouchableOpacity>


        </View>

    )
}

const styles = StyleSheet.create({
    Navbar: {
        backgroundColor: "#422B85",
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

    },
    gap:{
        backgroundColor:"white",

        height:20,
        padding:1,
    },
    saved: {
        width: "48%",
        alignItems: "center"
    }
})