import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 25,
  },
  mainHeaderTitle: {
    fontSize: 24,
    fontWeight:'500',
  },
  heading: {
    marginTop: 10
  },
  dateTimeContainer: {
    // flex: 2,
    flexDirection: 'row',
    marginBottom: 10
  },
  detailsContainer: {
    // flex: 5,
    flexDirection: 'row',
  },
  dateTimeText: {
    fontSize: 16,
    // fontWeight: "bold",
  },
  vehicleTypeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 12,
    opacity: 0.5,
  },
  cancelledBadge: {
    color: "red",
    fontWeight: "bold",
  },
  historyWrapper: {
    borderBlockEndColor: '#D3D3D3',
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scrollView: {
    padding: 10
  },
  backBtn: {
    paddingVertical: 20,
  },
});
