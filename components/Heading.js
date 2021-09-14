import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Heading() {
    return (
        <View style={styles.heading}>
            <Text style={styles.title}>
                SolarSpec
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
  
        


        width: "100%",
        height: 80,
        margin: 0,
        padding: 0,


        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#422B85",
    },
    title: {
        marginTop:20,
        fontFamily: "montserrat-bold",
        fontSize:20,


        color: "#fff"

    }
})