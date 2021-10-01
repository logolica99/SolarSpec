import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { VictoryBar, VictoryArea, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import Dialog from "react-native-dialog";
import PowerComponent from './PowerComponent';



export default function GraphData({ markerPosition, setPowerAmount, powerAmount }) {

    useEffect(() => {
        fetchData();

    }, [])

    const [openDate, setOpenDate] = useState(false);
    const [showStartDate, setShowStartDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(false)
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState([])
    const [graphData, setGraphData] = useState([])


    const [startDate, setStartDate] = useState("20210101")
    const [endDate, setEndDate] = useState("20210110")


    const onStartChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowStartDate(Platform.OS === 'ios');
       
        setStartDate(moment(currentDate,"YYYY-MM-DD").format("YYYYMMDD"))

    };

    const onEndChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowEndDate(Platform.OS === 'ios');
        setEndDate(moment(currentDate,"YYYY-MM-DD").format("YYYYMMDD"));
      

    };

    const doneButton = () => {
        setOpenDate(false)
        fetchData();
    }

    const storeGraphData = (hello) => {
        setGraphData([])
        let sum = 0;
        let index = 0;
        let index_to_use = [0, Object.keys(hello).length - 1]
        for (let i = 1; i < 4; i++) {
            index_to_use.push(Math.floor(Object.keys(hello).length * .25 * i))
        }

        Object.keys(hello).forEach(key => {

            sum += hello[key]
            if (index_to_use.includes(index)) {



                let a = moment(key).format("MM/DD/YYYY")

                let new_data = { x: a, y: hello[key] }
                setGraphData(prev => [...prev, new_data])
            }
            index += 1;



        })


        setPowerAmount((sum / Object.keys(hello).length).toFixed(2))
        console.log(graphData)
    }

    const fetchData = () => {
        console.log(`https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_UVA&community=RE&longitude=${markerPosition.longitude}&latitude=${markerPosition.latitude}&start=${startDate}&end=${endDate}&format=JSON`)
        fetch(`https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_UVA&community=RE&longitude=${markerPosition.longitude}&latitude=${markerPosition.latitude}&start=${startDate}&end=${endDate}&format=JSON`)
            .then(response => response.json())
            .then(response => {
                const hello = response.properties.parameter.ALLSKY_SFC_UVA

                // console.log(response)

                setData(hello)
                storeGraphData(hello);

            })
    }




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
                {startDate && endDate ? (
                    <Dialog.Button onPress={doneButton} label="done" />
                ) : <Dialog.Button onPress={() => setOpenDate(false)} label="Cancel" />}

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
                        data={graphData}
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