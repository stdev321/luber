import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./SelectPickLocationStyle";
import { StatusBar } from "expo-status-bar";
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocation } from "../../context/LocationContext";
import { getGeocodeData } from "../../Helper/Geocodding";
import GooglePlacesSelect from "./../../Atoms/GoogleSearch/GoogleSearch";
interface Props {
  navigation: any;
  route: any;
}

const SelectPickLocation = ({ navigation, route }: Props) => {
  const [predictions, setPredictions] = useState([]);
  const { pickLocation, setGlobalPickLocation } = useLocation();
  console.log({ pickLocation });

  const handleDestination = async (value: string) => {
    // 'details' is provided when fetchDetails = true
    const response = await getGeocodeData(value);
    if (response) {
      setGlobalPickLocation({
        address: value,
        location: {
          coords: {
            latitude: response.lat,
            longitude: response.lng,
            altitude: 0, // You can set these values based on your use case
            accuracy: 0,
            altitudeAccuracy: 0,
            heading: 0,
            speed: 0,
          },
          timestamp: new Date().getTime(),
        },
      });
      navigation.navigate("Home");
    }
  };

  // const handlePrediction = (data, details) => {
  //   // Update the predictions state when a prediction is received
  //   setPredictions(data);
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.pickupWrap}>
          <Pressable
            style={{ paddingVertical: 20 }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../../assets/back.png")}
            />
          </Pressable>
          <Text style={styles.pickUpText}>Pick up</Text>
        </View>
        <GooglePlacesSelect
          value={pickLocation?.address}
          onChange={handleDestination}
        />
        <View style={styles.bottomContainer}>
          <Pressable style={styles.bottomButtons}>
            <MaterialIcons
              name="my-location"
              size={20}
              style={{ paddingHorizontal: 10 }}
            />
            <Text>Current Location</Text>
          </Pressable>
          <Text style={{ color: "#ddd" }}>|</Text>
          <Pressable
            style={styles.bottomButtons}
            onPress={() => {
              navigation.navigate("MapView");
            }}
          >
            <Icon name="location" size={20} style={{ paddingHorizontal: 10 }} />
            <Text>Locate on map</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SelectPickLocation;
