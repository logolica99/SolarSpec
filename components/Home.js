import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dialog from "react-native-dialog";



import Heading from '../components/Heading';
import MapScreen from './MapScreen';






export default function Home() {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0073077622282404775,
        longitudeDelta: 0.007763318717479706,
    })


    const [areaDialog, setAreaDialog] = useState(false);

    const [area,setArea] = useState(0);




    return (
        <View style={styles.container}>

            <Heading />

            <MapScreen region={region} setRegion={setRegion} setAreaDialog={setAreaDialog} />


            <Dialog.Container visible={areaDialog} onBackdropPress={() => setAreaDialog(false)}>
                <Dialog.Title>Enter Area:</Dialog.Title>
                <Dialog.Description>
                    Please enter your total area(m^2):
                    (leave empty if you don’t know)
                </Dialog.Description>
                <Dialog.Input placeholder="Area..." onChangeText={(text)=>setArea(text)}></Dialog.Input>
                <Dialog.Button label="Go" />

            </Dialog.Container>



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B142F",
    },

})