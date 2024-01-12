import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./LoginStyle";
import {
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withDelay,
} from "react-native-reanimated";
import TextField from "../../Atoms/TextInput/TextField";

interface Props {
  navigation: any;
}

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showComponents, setShowComponents] = useState(false);

  const isNextButtonDisabled = !email || !password;

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleNextPress = () => {
    setLoading(true); // Set loading to true when the button is pressed

    // Simulate an asynchronous operation (e.g., API call) with a delay
    setTimeout(() => {
      // Perform any necessary actions before navigating to the next screen
      navigation.navigate("Home");

      // Clear the form and reset loading state
      setEmail("");
      setPassword("");
      setLoading(false);
    }, 2000); // Change the delay as needed
  };

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  const startAnimation = () => {
    setShowComponents(false);
    opacity.value = withTiming(1, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
    scale.value = withDelay(
      200,
      withTiming(1, { duration: 500, easing: Easing.inOut(Easing.ease) })
    );
    setShowComponents(true);
  };

  useEffect(() => {
    startAnimation();
    // TODO: Remove this after development
    navigation.navigate('Home');
  }, []);

  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Pressable
        style={styles.backBtn}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../../assets/back.png")}
        />
      </Pressable>
      {showComponents ? (
        <Animated.ScrollView style={[styles.container, containerStyle]}>
          <Text style={styles.text}>Enter your Email for verification</Text>
          <Text style={styles.subText}>
            This email will be used for all ride-related communication. You
            shall receive an SMS with a code for verification.
          </Text>
          <TextField
            placeholder="Email"
            onChange={handleEmailChange}
            value={'email'}
          />
          <TextField
            placeholder="Password"
            onChange={handlePasswordChange}
            value={'password'}
          />
          <Pressable
            style={[
              styles.buttonStyle,
              { opacity: isNextButtonDisabled ? 0.5 : 1 },
            ]}
            onPress={handleNextPress}
            disabled={isNextButtonDisabled || loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonTextStyle}>Next</Text>
            )}
          </Pressable>
        </Animated.ScrollView>
      ) : (
        <ActivityIndicator
          size="large"
          color="#000"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      )}
    </SafeAreaView>
  );
};

export default Login;
