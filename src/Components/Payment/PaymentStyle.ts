import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 25,
  },
  mainHeaderTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  heading: {
    marginTop: 10,
  },
  innerSec: {
    paddingVertical: 10,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
  },
  innerSecWrap: {
    flexDirection: "row",
    columnGap: 18,
    alignItems: "center",
  },
  innerText: {
    fontSize: 16,
  },
  innerRowWrap:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    paddingVertical:10,
    paddingBottom:20,
  },
  innerContent:{
    flexDirection:'row',
    columnGap:18,
    alignItems:'center',
  },
  innerContentText:{
    fontSize:16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  cashMoldalContainer: {
    flex: 1,
    display:'flex',
    height:'100%',
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  cashModalContent:{
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 30,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 30,
    width: "100%",
  },
  secondModalContent:{
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 30,
    width: "100%",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  updatedModalHeading:{
    fontSize:26,
    fontWeight:'600',
  },
  updatedModalText:{
    paddingVertical:20,
  },
  modalButton:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 7,
    marginVertical: 15,
    paddingVertical: 15,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  hereHeading: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 15,
  },
  modalTextWrap: {
    paddingVertical: 20,
  },
  modalText: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    paddingBottom: 15,
    color: "#000",
    fontSize: 16,
  },
  arrowWrap: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
  defaultText: {
    backgroundColor: "#e9fae7",
    color: "#31a926",
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
    borderRadius:7,
    marginHorizontal:15,
  },
  innerRowWithArrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 5,
    paddingVertical: 13,
    // width:'100%'
  },
  imgTextWrap:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    padding: 10,
  },
  backBtn: {
    paddingVertical: 20,
  },
});
