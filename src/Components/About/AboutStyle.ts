import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#fff",
    flex: 1,
    width:'100%',
    paddingTop:40,
  },
  topBar:{
    display:'flex',
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
    borderBottomWidth: 0.4,
    borderBottomColor: '#ccc'
  },
  heading:{
    fontSize:18,
    fontWeight:'600',
    textAlign:'center',
    width:'65%',
  },
  bodycontent:{
    display:'flex',
    alignItems:'center',
    paddingVertical:30,
    rowGap:20
  },
  logo:{
    width:130,
    height:130,
    margin:'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  versionText: {
    fontSize: 15,
    color: "#000",
  },
  bottomWrap:{
    display:'flex',
    alignItems:'center',
    position:'absolute',
    bottom:50,
    textAlign:'center',
    width:'100%',
    rowGap:20,
  },
  bottomText:{
    color: '#1B75D0',
    fontSize: 14,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 7,
    paddingVertical: 15,
    marginVertical:20,
    // elevation: 3,
    // margin: 10,
  },
  buttonTextStyle: {
    color: "#fff",
    fontWeight: '500',
    fontSize: 19,
  },
  terms: {
    color: "#fff",
    textAlign: "center",
    // marginTop: 100,
  },
  shadowProps: {
    shadowColor: "#000",
  },
  LuberText:{
    color: '#eb7c37',
    fontSize: 28,
  },
});
