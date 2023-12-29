import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userName: {
    fontSize: 20,
    marginBottom: 20,
  },
  profileWrapper: {
    padding: 15,
  },
  item: {
    borderBottomWidth: 1,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoutBtn: {
    display: "flex",
    flexDirection: "row",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
});
