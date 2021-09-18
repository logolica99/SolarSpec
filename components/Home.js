import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import Heading from '../components/Heading';
import MapScreen from './MapScreen';







export default function Home() {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0073077622282404775,
        longitudeDelta: 0.007763318717479706,
    })

   





    return (
        <View style={styles.container}>
            
            <Heading />
            
            <MapScreen region={region} setRegion={setRegion}/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B142F",
    }
})