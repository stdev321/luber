import React, { useRef, useEffect } from "react";
import { Pressable, View, Image, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./SelectDestLocationStyle";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import { useLocation } from "../../context/LocationContext";
import { getGeocodeData } from "../../Helper/Geocodding";

interface Props {
  navigation: any;
}

const SelectDestLocation = ({ navigation }: Props) => {
  const fieldRef = useRef<GooglePlacesAutocompleteRef | null>(null);
  const { destinationLocation, setGlobalDestLocation } = useLocation();

  useEffect(() => {
    if (
      fieldRef.current &&
      destinationLocation &&
      destinationLocation.address
    ) {
      console.log(fieldRef.current.setAddressText(destinationLocation.address));
    }
  }, [destinationLocation]);

  const handleDestination = async (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) => {
    // 'details' is provided when fetchDetails = true
    const response = await getGeocodeData(data.description);
    if (response) {
      setGlobalDestLocation({
        address: data.description,
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
    }
  };

  return (
    <View>
      <StatusBar />
      <View style={styles.container}>
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
          <Text style={styles.pickUpText}>Destination</Text>
        </View>
        <View style={styles.topSearch}>
          <View style={styles.searchInput}>
            <Image
              style={styles.greenDot}
              source={require("../../../assets/green-dot.png")}
            />
            {/* <TextField
              placeholder="Search Pickup Location"
              style={styles.inputBox}
            /> */}
            <GooglePlacesAutocomplete
              ref={fieldRef}
              placeholder="Search destination address"
              onPress={handleDestination}
              query={{
                key: "AIzaSyAUrZdfSdHFZbz-kAhi9sj2erP1dQvZD5E",
                language: "en",
              }}
              styles={{
                listView: {
                  zIndex: 999999,
                  // height: 10,
                },
              }}
            />
          </View>
        </View>

        <ScrollView>
          <View style={styles.mainContainer}>
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 20 }}>
              Location not found
            </Text>
            <Text style={{ fontSize: 15, color: "#a1a1a1" }}>
              Please try a different address or locate on map
            </Text>
          </View>
        </ScrollView>
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
    </View>
  );
};

export default SelectDestLocation;
