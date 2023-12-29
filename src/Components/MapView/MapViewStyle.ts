import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    map: {
        flex: 1,
    },
    bottomContainer: {
        padding: 10,
        width: width,
        height: 250,
    },
    bottomButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    suggestLocation: {
        height: 100,
        padding: 10,
        width: width - 15,
        color: "#000",
        flex: 1,
        flexDirection: "row",
      }
})