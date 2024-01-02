import { StyleSheet, TextInput, View, StyleProp, TextStyle } from "react-native";
import React from "react";

interface Props {
  onChange?: (text: string) => void;
  value?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

const TextField = ({ onChange, value, placeholder, style }: Props) => {
  return (
    <View>
      <TextInput
        style={[styles.input, styles.shadowProps, style]}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    padding: 10,
    borderColor: "#c9c9c9",
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 7,
  },
  shadowProps: {
    shadowColor: "#000",
    // shadowOffset: { height: 60, width: 100 },
    // shadowOpacity: 0.2,
    // shadowRadius: 0,
  },
});
