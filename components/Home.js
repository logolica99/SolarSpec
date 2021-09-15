import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import Heading from '../components/Heading';
import GoogleMap from './GoogleMap';






export default function Home() {

    const [location, setLocation] = useState({coords:{latitude:0}});

   





    return (
        <View style={styles.container}>

            <Heading />
            <Text>Home</Text>
            <GoogleMap/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B142F",
    }
})