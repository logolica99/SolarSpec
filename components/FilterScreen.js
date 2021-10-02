import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';



export default function FilterScreen() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <View >

                <View >

                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColor={true ? "#734FDA" : "#734FDA"}

                    />


                </View>
                <Text style={styles.features}>Solar Irradiance</Text>
            </View>
            <View >

                <View >

                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColor={true ? "#734FDA" : "#734FDA"}

                    />


                </View>
                <Text style={styles.features}>Temperature</Text>
            </View>
            <View >

                <View >

                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColor={true ? "#734FDA" : "#734FDA"}

                    />


                </View>
                <Text style={styles.features}>Humidity</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    features: {
        color: "white",
        fontFamily: "montserrat-bold",
        marginLeft: 40,
        marginTop: 5

    }
})