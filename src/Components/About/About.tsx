import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AboutStyle";
import {
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

interface Props {
  navigation: any;
}

const About = ({ navigation }: Props) => {
  return (
    <>
    <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topBar}>
        <Pressable
            style={{ padding: 20 }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../../assets/back.png")}
            />
          </Pressable>
          <Text style={styles.heading}>About</Text>
        </View>
        <View style={styles.bodycontent}>
        <Image
             style={styles.logo}
            source={require("../../../assets/black-logo.png")}
          />
          <Text style={styles.versionText}>Version 0.0.1</Text>
        </View>
          
        <View style={styles.bottomWrap}>
          <Text style={styles.bottomText}>
            Terms & Conditions
          </Text>
          <Text style={styles.bottomText}>
            Privacy Policy
          </Text>
          </View>
      </View>
    </>
  );
};

export default About;
