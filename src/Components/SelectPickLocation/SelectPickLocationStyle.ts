import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  topSearch: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: width,
    maxHeight: 100
  },
  backButton: {
    marginTop: 7,
    width: 30
  },
  searchInput: {
    width: 320,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginStart: 10,
    marginEnd: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 7,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderWidth: 1
  },
  inputBox: {
    width: 250,
    height: 40,
    borderWidth: 0,
  },
  mainContainer: {
    marginTop: 40,
   height: 300,
  },
  bottomContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  bottomButtons: {
    padding: 5,
    margin: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d1d1d1",
    borderWidth: 1
  }
});