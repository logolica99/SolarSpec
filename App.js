import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';




import Home from './components/Home';
import Saved from './components/Saved';
import NavBar from './components/NavBar';


const Tab = createBottomTabNavigator();


const getFonts = () => Font.loadAsync({
  "montserrat-regular": require('./assets/fonts/Montserrat-Regular.ttf'),
  "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf")
})



export default function App() {


  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [HomeScreen, setHomeScreen] = useState(true);
  const [dataScreen, setDataScreen] = useState(false);

  const [areaDialog, setAreaDialog] = useState(false);
  const [area, setArea] = useState(0);
  const [totalSaved, setTotalSaved] = useState(0);
  const [positions, setPositions] = useState([])
  const [showSaveList, setShowSaveList] = useState(true)


  const getTotalSaved = async () => {

    try {

      let value = await AsyncStorage.getItem('@total_saved')

      if (value === null) {

        value = 0


      }

      setTotalSaved(value);

    } catch (e) {
      // error reading value
    }
  }

  const getSavedPositions = async () => {

    if (totalSaved != 0) {

      for (let i = 1; i <= totalSaved; i++) {
        let jsonValue = await AsyncStorage.getItem(`@marker_position${i}`)
        if (jsonValue != null) {
          setPositions(prev => [...prev, JSON.parse(jsonValue)])
        }


      }
    }
  }

  useEffect(() => {
   getTotalSaved()
    getSavedPositions();


  },[])


  if (fontsLoaded) {

    return (

      <NavigationContainer>
        <Tab.Navigator tabBar={props => <NavBar {...props} setHomeScreen={setHomeScreen} setDataScreen={setDataScreen} setAreaDialog={setAreaDialog} setArea={setArea} setShowSaveList={setShowSaveList}/>}>

          <Tab.Screen
            name="Home"

            children={() => <Home
              HomeScreen={HomeScreen}
              setHomeScreen={setHomeScreen}
              dataScreen={dataScreen}
              setDataScreen={setDataScreen}
              areaDialog={areaDialog}
              setAreaDialog={setAreaDialog}
              setPositions={setPositions}
              totalSaved={totalSaved}
              setTotalSaved={setTotalSaved}
              area={area} 
              setArea={setArea}
              
            />}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Saved"
            children={() => <Saved positions={positions} totalSaved={totalSaved} showSaveList={showSaveList} setShowSaveList={setShowSaveList}/>}
            options={{ headerShown: false }}
          />

        </Tab.Navigator>
      </NavigationContainer>

    );
  }
  else {
    return (

      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}

      />
    )
  }


}

const styles = StyleSheet.create({



});



