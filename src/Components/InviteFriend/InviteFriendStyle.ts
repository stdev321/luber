import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    height: "100%",
    flex: 1,
  },
  inviteWrap: {
    display: "flex",
    // flexDirection:'row',
    // alignItems:'flex-end',
    justifyContent: "flex-end",
    columnGap: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#e9fae7",
  },
  inviteImg: {
    width: 150,
    height: 150,
  },
  inviteTextWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    alignItems: "flex-end",
  },
  pickUpText: {
    fontSize: 24,
    fontWeight: "500",
  },
  knowMoreText: {
    fontSize: 16,
    color: "#1B75D0",
    fontWeight: "500",
    paddingVertical: 20,
  },
  referralWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#f7f7f7",
    marginHorizontal: 20,
    borderRadius: 7,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#e7e7e7",
  },
  referText: {
    color: "#919191",
    fontSize: 17,
  },
  code: {
    fontSize: 19,
    fontWeight: "600",
  },
  bottomButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 7,
    margin: 20,
    marginVertical: 15,
    paddingVertical: 15,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },

  backButton: {
    marginTop: 7,
    width: 30,
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  inviteInnerWrap:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:20,
    borderWidth:1,
    borderRadius:7,
    borderColor:'#ccc'
  },
  innerBorder:{
    borderRightWidth:1,
    borderColor:'#ccc',
    height:'100%'
  },
  inviteNumber:{
    fontSize:24,
    fontWeight:'600',
  },
  inviteInnerText:{
    color:'#aaa'
  },
  inviteInnerContent:{
    // textAlign:'center',
    alignItems:'center'
  },
  bottomContainer: {
    position: "relative",
    bottom: 20,
    marginTop: "auto",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
    // backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
  },
  hereHeading: {
    fontSize: 24,
    fontWeight: "500",
  },
  modalTextWrap: {
    paddingVertical: 20,
  },
  modalText: {
    paddingVertical: 8,
    paddingHorizontal:15,
    paddingBottom:15,
    color: "#919191",
  },
  textCheck: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    columnGap:5,
  },
  modalButton:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 7,
    marginVertical: 15,
    paddingVertical: 15,
  },
});
