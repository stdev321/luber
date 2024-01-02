import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  greenDot: {
    width: 8,
    height: 8,
  },
  topSearchBox: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 40,
    backgroundColor: "#fff",
    width: width - 20,
    padding: 10,
    paddingHorizontal: 15,
    zIndex: 3,
    marginTop: 10,
    borderRadius: 10,
    color: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchDrawerMenu: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
  },
  searchInputBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginStart: 20,
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
    zIndex: 2,
    height: 420,
    width: width,
  },
  map: {
    flex: 1,
  },
  sliderBox: {
    zIndex: 2,
    position: "absolute",
    top: 415,
    shadowColor: "#000",
    // shadowOffset: { height: -1, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 50,
  },
  sliderViewBox: {
    flex: 1,
    flexDirection: "row",
  },
  sliderbar: {
    // flex: 1,
    height: 70,
    minWidth: 90,
    // width: '100%',
  },
  sliderBarTouchable: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 10,
  },
  sliderText: {
    fontSize: 11,
    color: "#424242",
    opacity: 0.5,
    paddingTop: 5,
  },
  activeItem: {
    // opacity: 0.5,
  },
  activeText: {
    opacity: 1,
    color: "#000",
    fontWeight: "600",
    borderBottomWidth: 5,
    paddingBottom: 5,
    position: "relative",
  },
  activeTextUnderline: {
    position: "absolute",
    bottom: 5,
    left: 20,
    right: 0,
    width: 50,
    height: 2,
    backgroundColor: "#000",
  },
  bottomView: {
    zIndex: 2,
    position: "absolute",
    top: 480,
    backgroundColor: "#fff",
    width: width - 20,
    // height: 250,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 5,
    // borderWidth: 1,
    padding: 5,
    borderRadius: 7,
    // borderColor: "#d1d1d1",
  },
  bottomViewInput: {
    backgroundColor: "#eee",
    alignItems: "center",
    padding: 10,
    width: width - 41,
    borderRadius: 7,
    color: "#000",
    flex: 1,
    flexDirection: "row",
  },
  bannerImage: {
    position: "absolute",
    top: 600,
    width: width,
    height: 200,
    zIndex: 0,
  },
  recentLocation: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    width: width - 15,
    color: "#000",
    flex: 1,
    flexDirection: "row",
  },
});
