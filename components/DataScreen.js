import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';


import Heading from './Heading';
import PowerComponent from './PowerComponent';
import GraphData from './GraphData';
import FilterScreen from './FilterScreen';


export default function DataScreen({ area, markerPosition, totalSaved, setTotalSaved, setPositions, showSave, setArea, powerAmount, setPowerAmount }) {




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

                    <GraphData
                        markerPosition={markerPosition} 
                        powerAmount={powerAmount}
                        setPowerAmount={setPowerAmount}
                    />

                </ScrollView >
            </View>
        )
    } else {

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

                    <GraphData markerPosition={markerPosition} powerAmount={powerAmount}
                        setPowerAmount={setPowerAmount}/>

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