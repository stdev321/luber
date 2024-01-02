import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userName: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  profileWrapper: {
    padding: 20,
    marginTop: 25,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContent: {
    paddingTop: 13,
    paddingBottom: 13,
  },
  text: {
    fontSize: 18,
  },
  placeHolderText: {
    fontSize: 15,
    color: "#aaa",
  },
  logoutBtn: {
    display: "flex",
    flexDirection: "row",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  inputWrap: {
    marginBottom: 12,
  },
  logoutButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 7,
    marginTop: 20,
    paddingVertical: 15,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});
