import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PowerComponent({ powerAmount, area, markerPosition, totalSaved, setTotalSaved, setPositions, showSave,setArea }) {

    const TotalPower = () => {
        if (area) {
            return (
                <Text style={styles.power}>{powerAmount * area} W</Text>
            )
        } else {
            return (
                <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: "center", }}>

                    <Text style={{ lineHeight: 30 }} style={styles.power}>{powerAmount} W/m</Text>

                    <Text
                        style={{ fontSize: 20, lineHeight: 80, color: "white", fontFamily: "montserrat-bold" }}
                    >2</Text>

                </View>

            )
        }
        


    }




    const saveDataBtn = async () => {
        let positionData = {}
        setTotalSaved(prev => prev + 1)
        if (area) {

            positionData = {
                "latitude": markerPosition.latitude,
                "longitude": markerPosition.longitude,
                "power": powerAmount * area,
                "unit": "w"
            }
        } else {

            positionData = {
                "latitude": markerPosition.latitude,
                "longitude": markerPosition.longitude,
                "power": powerAmount,
                "unit": "w/m^2"
            }
        }
     
        const jsonValue = JSON.stringify(positionData)
        await AsyncStorage.setItem(`@marker_position${totalSaved}`, jsonValue)
        setPositions(prev => [...prev, positionData])
        

    }

    const saveBtn= ()=>{
     
        if(showSave){
      
            return(
                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                <TouchableOpacity onPress={saveDataBtn}>
                    <Text style={styles.btn}>Save For Later</Text>
                </TouchableOpacity>
            </View>

            )
        }
    }
    return (

        <View style={styles.container}>
            <Text style={styles.title}>You can produce</Text>
            {TotalPower()}
         

            {saveBtn()}


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#746DE4",

        marginHorizontal: "17%",
        marginTop: 30,
        borderRadius: 30,


    },
    title: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "montserrat-bold",
        marginTop: 20
    },
    power: {
        color: "white",
        fontFamily: "montserrat-bold",
        fontSize: 40,
        textAlign: "center",
        marginVertical: 16

    },
    btn: {
        color: "white",
        textAlign: "center",
        fontFamily: "montserrat-bold",
        backgroundColor: "#312161",

        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
    }


})