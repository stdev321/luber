import React from "react";
import { Pressable, ScrollView, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconI from "react-native-vector-icons/Ionicons";
import { styles } from "./SelectPickLocationStyle";
import { StatusBar } from "expo-status-bar";
import TextField from "../../Atoms/TextInput/TextField";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

interface Props {
  navigation: any;
  route: any;
}

const SelectPickLocation = ({ navigation, route }: Props) => {
  const { location, setLocation } = route.params;
  console.log(location);
  
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
          <Text style={styles.pickUpText}>Pick up</Text>
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
              placeholder="Search"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: "AIzaSyAUrZdfSdHFZbz-kAhi9sj2erP1dQvZD5E",
                language: "en",
              }}
              styles={{
                listView: {
                  zIndex: 999999,
                  height: 10,
                },
              }}
            />
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 20 }}>
            Location not found
          </Text>
          <Text style={{ fontSize: 15, color: "#a1a1a1" }}>
            Please try a different address or locate on map
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Pressable style={styles.bottomButtons}>
              <Icon
                name="location-pin"
                size={30}
                style={{ color: "#3bfc2d", width: 40 }}
              />
              <Text>Current Location</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={styles.bottomButtons}
              onPress={() => {
                navigation.navigate("MapView");
              }}
            >
              <Icon
                name="location"
                size={30}
                style={{ color: "#2dc1fc", width: 40 }}
              />
              <Text>Locate on map</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectPickLocation;
