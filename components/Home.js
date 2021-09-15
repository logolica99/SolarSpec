import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

import Heading from '../components/Heading';







export default function Home() {

    const [location, setLocation] = useState({});

    useEffect(()=>{
        getLocation();
    },[])



    const getLocation = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.warn('Permission to access location was denied');
            return;
        }

        const getlocation = await Location.getCurrentPositionAsync();
      
        setLocation(getlocation)
        console.log(location)

    }





    return (
        <View style={styles.container}>

            <Heading />
            <Text>Home</Text>
            <Button title="hello" onPress={getLocation} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B142F",
    }
})