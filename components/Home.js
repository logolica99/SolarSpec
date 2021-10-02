import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';
import Dialog from "react-native-dialog";





import Heading from '../components/Heading';
import MapScreen from './MapScreen';
import DataScreen from './DataScreen';



export default function Home({ HomeScreen, setHomeScreen, dataScreen, setDataScreen, areaDialog, setAreaDialog, totalSaved, setTotalSaved, setPositions, area, setArea, powerAmount, setPowerAmount }) {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0073077622282404775,
        longitudeDelta: 0.007763318717479706,
    })
    const [markerPosition, setMarkerPosition] = useState({
        "latitude": region.latitude,
        "longitude": region.longitude
    });

    const createLightModeAlert = () => {
        Alert.alert(
            "Warning!",
            "Please Turn on Light mode for best user experience",
            [
               
                { text: "OK" }
            ]
        );
    }

    useEffect(()=>{
        createLightModeAlert();
    })






    const [showSave, setShowSave] = useState(true)
    const AreaButton = async () => {
        setHomeScreen(false)
        setDataScreen(true)




    }

    const renderHome = () => {
        if (HomeScreen) {
            return (
                <View>





                    <MapScreen
                        region={region}
                        setRegion={setRegion}
                        setAreaDialog={setAreaDialog}
                        markerPosition={markerPosition}
                        setMarkerPosition={setMarkerPosition}


                    />


                    <Dialog.Container visible={areaDialog} onBackdropPress={() => setAreaDialog(false)}>
                        <Dialog.Title>Enter Area:</Dialog.Title>
                        <Dialog.Description>
                            Please enter your total area(m^2):
                            (leave empty if you don’t know)
                        </Dialog.Description>
                        <Dialog.Input placeholder="Area..." keyboardType="numeric" onChangeText={(text) => setArea(text)}></Dialog.Input>
                        <Dialog.Button label="Go" onPress={AreaButton} />

                    </Dialog.Container>


                </View>
            )

        } else if (dataScreen) {
            return (
                <DataScreen
                    area={area}
                    markerPosition={markerPosition}
                    setPositions={setPositions}
                    totalSaved={totalSaved}
                    setTotalSaved={setTotalSaved}
                    showSave={showSave}
                    setArea={setArea}
                    powerAmount={powerAmount}
                    setPowerAmount={setPowerAmount}
                />
            )
        }
    }



    return (
        <View style={styles.container}>

            <Heading />

            {renderHome()}


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B142F",
        height: "100%",

    },

})