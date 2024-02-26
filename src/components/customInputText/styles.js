import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    paddingLeft:10,
    color: "red", //"#000",
  },
  inputBox:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    width:'90%',
    margin:10
  }
});

export default styles;
