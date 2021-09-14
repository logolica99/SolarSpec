import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';





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

  if (fontsLoaded) {

    return (
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <NavBar {...props} />}>

          <Tab.Screen
            name="Home"
            component={Home}
            
            options={{ headerShown:false}}
          />

          <Tab.Screen
            name="Saved"
            component={Saved}
            options={{ headerShown:false}}
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



