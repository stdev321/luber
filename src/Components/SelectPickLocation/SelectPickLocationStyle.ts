import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor:'#fff',
    height:'100%',
    // justifyContent:'space-around'
    // alignItems: "center",
  },
  demo: {
    width: width - 10
  },
  pickupWrap:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    columnGap:15,
    paddingHorizontal:20
  },
  pickUpText:{
    fontSize:17,
    fontWeight:'600',
  },
  topSearch: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: width,
    // maxHeight: 100
  },
  backButton: {
    marginTop: 7,
    width: 30
  },
  greenDot: {
    width: 6,
    height: 6,
    position:'absolute',
    left:17,
    top:22,
  },
  searchInput: {
    width: width -25,
    // height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 3,
    paddingLeft:25,
    borderRadius: 7,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { height: -1, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inputBox: {
    width: 250,
    // height: 40,
    borderWidth: 0,
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  bottomContainer: {
    // width: 400,
    marginBottom:5,
    flexDirection: "row",
    paddingVertical:6,
    paddingHorizontal: 9,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,  
    position:'relative',
    bottom: 0,
  },
  bottomButtons: {
    padding: 5,
    margin: 5,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#d1d1d1",
    // borderWidth: 1
  },
 
});