import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  searchInput: {
    // width: width - 35,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 3,
    paddingLeft: 25,
    borderRadius: 7,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { height: -1, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal:10,
  },
});
