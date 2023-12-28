import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#454545",
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  topSearchBox: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 10,
    backgroundColor: "#fff",
    width: width - 20,
    padding: 10,
    zIndex: 2,
    marginTop: 10,
    borderRadius: 10,
    color: "#000",
  },
  searchDrawerMenu: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
  },
  searchInputBox: {
    width: 200,
  },
  searchProfilebutton: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  MapViewContainer: {
    position: "absolute",
    top: 0,
    height: 350,
    width: width,
  },
  map: {
    flex: 1,
  },
  sliderBox: {
    position: "absolute",
    top: 350,
  },
  sliderViewBox: {
    flex: 1,
    flexDirection: "row",
  },
  sliderbar: {
    flex: 1,
    height: 100,
    minWidth: 150,
  },
  sliderBarTouchable: {
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    },
    bottomView: {
        position: "absolute",
        top: 440,
        backgroundColor: "#fff",
        width: width - 5,
        height: 200,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        borderColor: "#d1d1d1"
    },
    bottomViewInput: {
        backgroundColor: "#d1d1d1",
        padding: 10,
        width: width - 15,
        borderRadius: 10,
        color: "#000",
        flex: 1,
        flexDirection: "row"
    }

});
