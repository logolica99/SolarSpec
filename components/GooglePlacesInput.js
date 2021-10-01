import React from 'react';
import { ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({ setMarkerPosition, region, setRegion }) => {


  const fetchLocation = (address) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDeXMJjl_2MF_K4OXVf43MxOJiDzCf9bdI`)
      .then(response => response.json())
      .then(response => {

        let coords = response["results"][0]["geometry"].location
        let newMarker = { ...region }
        newMarker["longitude"] = coords.lng
        newMarker["latitude"] = coords.lat
        setRegion(newMarker)
        setMarkerPosition(newMarker)

      }
      )
  }

  const onPressFunc = (data, details) => {
    fetchLocation(data.description)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{ "width": "100%" }}>


      <GooglePlacesAutocomplete
        placeholder='Search'

        onPress={(data, details) => { onPressFunc(data, details) }}
        query={{
          key: 'AIzaSyDeXMJjl_2MF_K4OXVf43MxOJiDzCf9bdI',
          language: 'en',
        }}
      />
    </ScrollView>

  );
};

export default GooglePlacesInput;