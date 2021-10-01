import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';



export default function GoogleMap({ region, setRegion,markerPosition, setMarkerPosition }) {

    useEffect(() => {
        getLocation();

    }, [])




    const setMarker = (e) => {

        setMarkerPosition(e.nativeEvent.coordinate)

    }


    const getLocation = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.warn('Permission to access location was denied');
            return;
        }

        let getlocation = await Location.getCurrentPositionAsync();

        const newRegion = { ...region }
        newRegion["latitude"] = getlocation.coords.latitude;
        newRegion["longitude"] = getlocation.coords.longitude;
        setRegion(newRegion)
        setMarkerPosition({
            "latitude": getlocation.coords.latitude,
            "longitude": getlocation.coords.longitude
        })



    }





    const regionChange = newRegion => {
        setRegion(newRegion);

    }


    return (

        <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={region}
                onRegionChangeComplete={regionChange}
                onPress={setMarker}

            >
                <Marker coordinate={markerPosition}  pinColor="#557ded"/>
            </MapView>


            <Button
                title="Get your location"
                onPress={getLocation}
                color="#5950E5"

            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {


        height: "50%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },


});
