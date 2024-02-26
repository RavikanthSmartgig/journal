import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    color: "red", //"#000",
  },
  inputBox:{
    padding:10,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    width:'90%',
    margin:10
  },
  btnContainer:{
    backgroundColor:'#8C9EFF',
    padding:10,
    width:'90%',
    borderRadius:14,
    position:'absolute',
    justifyContent:'center',
    alignItems:"center",
    margin:10,
    bottom:10
  }

});

export default styles;
