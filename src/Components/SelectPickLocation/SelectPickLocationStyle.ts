import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  topSearch: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: width,
    height: 200,
  },
});
