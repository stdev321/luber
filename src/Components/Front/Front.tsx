import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./FrontStyle";
import {
  View,
  TextInput,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";

interface Props {
  navigation: any;
}

const Front = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.container}>
          <Image
             style={{ width: "100%", height: "72%", resizeMode: "cover" }}
            source={require("../../../assets/login.jpg")}
          />
        <ScrollView style={styles.contentWrap}>
          <Text style={styles.textLabel}>Explore new ways to</Text>
          <Text style={styles.textLabel}>travel with Luber</Text>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonTextStyle}>
              Continue with Phone Number
            </Text>
          </Pressable>
          <Text>
            By continuing, you agree that you have read and accept our T&Cs and
            Privacy Policy
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

export default Front;
