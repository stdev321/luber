import { StyleSheet, Button } from "react-native";
import React from "react";

interface Props {
  onPress?: (data: any) => void;
  title: string;
}

const ButtonPrimary = ({ title, onPress }: Props) => {
  return <Button color="#000" title={title} onPress={onPress} />;
};

export default ButtonPrimary;

