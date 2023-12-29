import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userName: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20
  },
  profileWrapper: {
    padding: 20,
    marginTop: 25
  },
  item: {
    borderBottomWidth: 1,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  itemContent: {
    paddingTop: 10,
    paddingBottom: 10
  },
  logoutBtn: {
    display: "flex",
    flexDirection: "row",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
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
    marginBottom: 12
  }
});
