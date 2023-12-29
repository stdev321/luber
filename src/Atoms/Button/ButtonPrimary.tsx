import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";

interface Props {
  onPress?: (data: any) => void;
  title: string;
}

const ButtonPrimary = ({ title, onPress }: Props) => {
  return (
    <Pressable
      style={styles.buttonStyle}
      onPress={onPress}
    >
      <Text style={styles.buttonTextStyle}>{title}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 7,
    paddingVertical: 15,
    marginVertical:20,
    // elevation: 3,
    // margin: 10,
  },
  buttonTextStyle: {
    color: "#fff",
    fontWeight: '500',
    fontSize: 19,
  },
});
