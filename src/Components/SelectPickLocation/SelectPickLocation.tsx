import React from "react";
import { Pressable, ScrollView, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./SelectPickLocationStyle";

interface Props {
  navigation: any;
}

const SelectPickLocation = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topSearch}>
          <Pressable
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Image source={require("../../../assets/menu.png")} />
          </Pressable>
            <Icon name="dot-single" style={{ color: "#3bfc2d" }} size={30} />
            <Text style={{ fontSize: 18, marginStart: 20 }}>Search Pickup</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/user.png")}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectPickLocation;
