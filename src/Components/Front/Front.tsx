import React, { useState, useEffect } from "react";
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
import { StatusBar } from "expo-status-bar";

interface Props {
  navigation: any;
}

interface TypingTextProps {
  text: string;
  speed: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        setDisplayedText((prevText) => {
          const newText = prevText + text[prevText.length];
          if (newText.length === text.length) {
            setIsTyping(false);
          }
          return newText;
        });
      } else {
        setDisplayedText((prevText) => {
          const newText = prevText.slice(0, -1);
          if (newText.length === 0) {
            setIsTyping(true);
          }
          return newText;
        });
      }
    }, speed);
  
    return () => clearInterval(interval);
  }, [text, speed, isTyping]);

  return <Text style={styles.LuberText}>{displayedText}</Text>;
};

const Front = ({ navigation }: Props) => {
  return (
    <>
    <StatusBar/>
      <View style={styles.container}>
          <Image
             style={{ width: "100%", height: "71%", resizeMode: "cover" }}
            source={require("../../../assets/login.jpg")}
          />
        <ScrollView style={styles.contentWrap}>
          <Text style={styles.textLabel}>Explore new ways to</Text>
          <Text style={styles.textLabel}>travel with <TypingText text="Luber" speed={200} /></Text>
          
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonTextStyle}>
              Continue with Email
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
