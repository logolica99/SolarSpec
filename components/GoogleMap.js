import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default function GoogleMap() {

    useEffect(() => {
        getLocation();
    }, [])



    const getLocation = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.warn('Permission to access location was denied');
            return;
        }

        let getlocation = await Location.getCurrentPositionAsync();

        const newRegion = { ...initialRegion }
        newRegion["latitude"] = getlocation.coords.latitude;
        newRegion["longitude"] = getlocation.coords.longitude;
        setInitialRegion(newRegion)



    }
    const [initialRegion, setInitialRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0073077622282404775,
        longitudeDelta: 0.007763318717479706,
    })

    const [hello, setHello] = useState({})

    const onRegionChange = (newRegion) => {
        console.log(newRegion)
       

    }




    return (

        <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={initialRegion}
                onRegionChange={onRegionChange}
            >
            </MapView>
            <Button title="hello" onPress={getLocation} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 200,
        height: 400,
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
