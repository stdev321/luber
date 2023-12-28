import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#454545",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  topSearchBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    position: "absolute",
    top: 10,
    backgroundColor: "#fff",
    width: "90%",
    paddingHorizontal: 7,
    zIndex: 2,
    marginTop: 10,
    borderRadius: 10,
    color: "#000",
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
      },
      paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
      },
  searchDrawerMenu: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
  },
  searchInputBox: {
    margin: 5,
    width: "70%",
  },
  searchProfilebutton: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
  },
  MapViewContainer: {
    height: 350,
    width: "100%",
  },
  map: {
    flex: 1,
  },
});
