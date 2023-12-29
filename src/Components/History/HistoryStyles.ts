import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  mainHeader: {
    fontSize: 24,
    marginBottom: 20,
  },
  dateTimeContainer: {
    // flex: 2,
    flexDirection: 'row'
  },
  detailsContainer: {
    // flex: 5,
    flexDirection: 'row',
    marginLeft: 10,
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: "bold",
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
});
