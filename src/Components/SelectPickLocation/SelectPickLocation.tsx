import React from "react";
import { Pressable, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./SelectPickLocationStyle";
import { StatusBar } from "expo-status-bar";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocation } from "../../context/LocationContext";
interface Props {
  navigation: any;
  route: any;
}

const SelectPickLocation = ({ navigation, route }: Props) => {
  const { location } = useLocation();
  console.log({ location })
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
              placeholder="Search pickup address"
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
                  // height: 10,
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
            <Pressable style={styles.bottomButtons}>
              <MaterialIcons
                name="my-location"
                size={20}
                style={{paddingHorizontal:10}}
              />
              <Text>Current Location</Text>
            </Pressable>
            <Text style={{color:'#ddd'}}>|</Text>
            <Pressable
              style={styles.bottomButtons}
              onPress={() => {
                navigation.navigate("MapView");
              }}
            >
              <Icon
                name="location"
                size={20}
                style={{ paddingHorizontal:10 }}
              />
              <Text>Locate on map</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SelectPickLocation;
