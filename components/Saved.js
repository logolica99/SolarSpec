import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Heading from './Heading';
import DataScreen from './DataScreen';


export default function Saved({ totalSaved, positions, showSaveList, setShowSaveList,powerAmount, setPowerAmount }) {

    const [showSave, setShowSave] = useState(false)

    const [showDataScreen, setShowDataScreen] = useState(false)
    const [currentPosition, setCurrentPosition] = useState({})

    const DataCardBtn = (position) => {
        setShowSaveList(false)
        setShowDataScreen(true)
        setCurrentPosition(position)
        setPowerAmount(position.power)

    }


    const SavedScreen = () => {
        if (totalSaved === 0) {
            return (
                <Text style={styles.noData}>No saved data</Text>
            )
        } else {

            return (
                <View>


                    <Text style={styles.saved}>Saved</Text>




                    {
                        positions.map(position => {
                            return (
                                <View style={styles.card}>

                                    <TouchableOpacity style={styles.touch} onPress={() => DataCardBtn(position)}>
                                        <Text style={styles.power}>{position.power} {position.unit === "w" ? <Text style={styles.powerUnit}>W</Text> : <Text style={styles.powerUnit}>W/m2</Text>}</Text>
                                        <View>

                                            <Text style={styles.coord}>{position.latitude.toFixed(6)}</Text>
                                            <Text style={styles.coord}>{position.longitude.toFixed(6)}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }

                </View>
            )


        }
    }


    const saveList = () => {
        if (showSaveList) {
            return (

                <ScrollView>

                    {SavedScreen()}
                </ScrollView>

            )
        } else if (showDataScreen) {

            if (currentPosition.unit === "w") {
               
                return (
                    <ScrollView>

                        <DataScreen markerPosition={currentPosition} area={1} showSave={showSave} powerAmount={powerAmount}/>
                    </ScrollView>
                )
            }else{
                return (
                    <ScrollView>

                        <DataScreen markerPosition={currentPosition} area={0} showSave={showSave} powerAmount={powerAmount}/>
                    </ScrollView>
                )
            }

        }

    }


    return (
        <View style={styles.container}>
            <Heading />


            {saveList()}




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B142F"

    },
    noData: {
        color: "white",
        fontFamily: "montserrat-bold",
        fontSize: 25,
        textAlign: "center",
        marginTop: 30

    },
    saved: {
        color: "white",
        fontFamily: "montserrat-bold",
        fontSize: 22,
        marginLeft: 10,
        marginTop: 30,
        marginBottom: 20



    },
    card: {
        backgroundColor: "#746DE4",
        marginHorizontal: "4%",
        borderRadius: 16,
        marginVertical: 5


    },
    touch: {
        marginHorizontal: 40,
        marginVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",


    },
    power: {
        color: "white",
        fontFamily: "montserrat-bold",
        fontSize: 25,
    },
    powerUnit: {

    },
    coord: {
        color: "white",
        fontFamily: "montserrat-bold"

    }

})