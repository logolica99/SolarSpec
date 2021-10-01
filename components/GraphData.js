import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { VictoryBar, VictoryArea, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import Dialog from "react-native-dialog";



export default function GraphData() {

    const [openDate, setOpenDate] = useState(false);
    const [showStartDate, setShowStartDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(false)
    const [date, setDate] = useState(new Date(Date.now()));

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)


    const onStartChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowStartDate(Platform.OS === 'ios');
        setStartDate(currentDate);

    };

    const onEndChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowEndDate(Platform.OS === 'ios');
        setEndDate(currentDate);

    };

    const doneButton = ()=>{
        setOpenDate(false)
    }

    const data = [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 10 },
        { x: 5, y: 6 }
    ]
    const chartTheme = {
        axis: {
            style: {
                tickLabels: {
                    // this changed the color of my numbers to white
                    fill: 'white',
                },
                grid: {
                    stroke: "white",
                    strokeWidth: 1
                },
                axis: {
                    stroke: "white"
                },

            },
        },
    };



    return (
        <View style={styles.container}>


            {showStartDate && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onStartChange}

                />

            )}

            {showEndDate && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onEndChange}

                />

            )}

            <Dialog.Container visible={openDate} onBackdropPress={() => setOpenDate(false)}>
                <Dialog.Title>Enter custom time period</Dialog.Title>
                <Dialog.Button label="Set Start Date" onPress={() => setShowStartDate(true)} />
                <Dialog.Button label="Set End Date" onPress={() => setShowEndDate(true)} />
                {startDate&&endDate?(
                    <Dialog.Button onPress={doneButton} label="done"/>
                ):<Dialog.Button onPress={()=>setOpenDate(false)} label="Cancel"/>}
                
            </Dialog.Container>
            <Text style={styles.title}>Solar irradiance in your area over time</Text>

            <View style={{ width: "100%", backgroundColor: "#1B142F" }}>


                <VictoryChart
                    theme={chartTheme}
                    style={{
                        background: { fill: "#1B142F" }
                    }}

                    padding={{ top: 10, left: 20, bottom: 20, right: 38 }}

                >
                    <VictoryArea
                        style={{ data: { fill: "#593BAC" }, }}
                        interpolation="natural"
                        data={data}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}


                    />



                </VictoryChart>
            </View>


            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity style={{ marginLeft: 20, marginBottom: 30, marginTop: 35 }} onPress={() => { setOpenDate(true) }}>
                    <Text style={styles.btn}>Enter custom time period</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#312161",
        marginHorizontal: "3%",
        borderRadius: 20,
        marginVertical: 20
    },
    title: {
        color: "white",
        fontFamily: "montserrat-bold",
        textAlign: "center",
        marginVertical: 30,
        marginHorizontal: 20,
        fontSize: 18
    },
    btn: {
        color: "white",
        fontFamily: "montserrat-bold",
        backgroundColor: "#5950E5",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    }
})