import React from "react";
import { Pressable, ScrollView, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconI from "react-native-vector-icons/Ionicons";
import { styles } from "./SelectPickLocationStyle";
import { StatusBar } from "expo-status-bar";
import TextField from "../../Atoms/TextInput/TextField";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
        <View style={styles.topSearch}>
          <Pressable
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <IconI name="arrow-back" size={30} />
          </Pressable>

          <View style={styles.searchInput}>
            <Icon
              name="dot-single"
              style={{ color: "#3bfc2d", width: 20 }}
              size={30}
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
                },
              }}
            />

            <Pressable>
              <IconI size={20} name="close-circle-outline"></IconI>
            </Pressable>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={{ fontSize: 24 }}>Location not found</Text>
          <Text style={{ fontSize: 16 }}>
            Please try a different address or locate on map
          </Text>
        </View>

        <View style={styles.bottomContainer}>
        
          <Pressable style={styles.bottomButtons}>
            <Icon name="location-pin" size={30} style={{color: "#3bfc2d", width : 40}} />
            <Text>Current Location</Text>
          </Pressable>
          <Pressable style={styles.bottomButtons} onPress={() => {navigation.navigate("MapView")}}>
            <Icon name="location" size={30} style={{color: "#2dc1fc", width : 40}} />
            <Text>Locate on map</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SelectPickLocation;
