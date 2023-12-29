import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    // height: height,
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
   height: height - 500,
  },
  bottomContainer: {
    width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  bottomButtons: {
    width: 200,
    height: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d1d1d1",
    borderWidth: 1
  }
});
