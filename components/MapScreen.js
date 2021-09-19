import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import GoogleMap from './GoogleMap';






const MapScreen = ({ region, setRegion,setAreaDialog }) => {
    return (

        <View style={styles.container}>
          
            <Text style={styles.Info}>Choose your location</Text>
            <GoogleMap region={region} setRegion={setRegion} />
            

            {/* // check button */}
            <View style={styles.checkContainer}>

                <TouchableHighlight style={styles.checkTouch} underlayColor='#593BAC70' onPress={() => setAreaDialog(true)} >
                    <Text style={styles.checkBtn}>Check Data</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",



    },
    Info: {
        color: "white",
        fontFamily: "montserrat-bold",
        textAlign: "center",
        fontSize: 16,
        marginVertical: 20
    },
    checkBtn: {
        color: "white",
        fontFamily: "montserrat-bold",

        fontSize: 16,


    },
    checkTouch: {

        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#593BAC",
        borderRadius: 10,
    },
    checkContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: "18%"

    }
})


export default MapScreen;