import React from 'react';
import { Pressable, ScrollView, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconI from "react-native-vector-icons/Ionicons";
import { styles } from "./SelectDestLocationStyle";
import { StatusBar } from "expo-status-bar";
import TextField from "../../Atoms/TextInput/TextField";

interface Props {
  navigation: any;
}

const SelectDestLocation = ({ navigation }: Props) => {
  return (
    <ScrollView>
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
            <TextField
              placeholder="Search Destination Location"
              style={styles.inputBox}
            />
            <Pressable onPress={() => {}}>
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
    </ScrollView>
  );
}

export default SelectDestLocation;
