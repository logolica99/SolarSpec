import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';


import Heading from './Heading';
import PowerComponent from './PowerComponent';
import GraphData from './GraphData';


export default function DataScreen({ area, markerPosition, totalSaved, setTotalSaved, setPositions, showSave, setArea, powerAmount }) {

    if (powerAmount != 0) {




        return (
            <View style={styles.container}>

                <ScrollView style={styles.scrollView}>
                    <PowerComponent
                        powerAmount={powerAmount}
                        area={area}
                        markerPosition={markerPosition}
                        setPositions={setPositions}
                        totalSaved={totalSaved}
                        setTotalSaved={setTotalSaved}
                        showSave={showSave}
                        setArea={setArea}
                    />

                    <GraphData />

                </ScrollView >
            </View>
        )
    }else{
        
        return (
            <View style={styles.container}>

                <ScrollView style={styles.scrollView}>
                    <PowerComponent
                        powerAmount={12}
                        area={area}
                        markerPosition={markerPosition}
                        setPositions={setPositions}
                        totalSaved={totalSaved}
                        setTotalSaved={setTotalSaved}
                        showSave={showSave}
                        setArea={setArea}
                    />

                    <GraphData />

                </ScrollView >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1B142F"
    },
    scrollView: {
        marginBottom: 100
    }
})