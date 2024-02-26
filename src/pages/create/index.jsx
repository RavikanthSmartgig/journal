import { View, Text, TextInput, Button, TouchableOpacity, Alert,StatusBar } from "react-native";
import React, { useState } from "react";
import Header from "../../components/headerComp";

import styles from "./styles";
import CustomInputText from "../../components/customInputText";

const INITIAL_VALUE = {
  Title: "",
  Description: "",
};

const CreateScreen = ({ onSave, onCancel }) => {
  const [state, setState] = useState(INITIAL_VALUE);

  const onChange = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const onPress = () => {
    if(state.Title.trim()!="" &&state.Description.trim()!=""){
      onSave(state);
    }else{
      Alert.alert("Please enter All Details")
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <StatusBar
        animated={true}
        backgroundColor="#8C9EFF"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      <Header onCancel={onCancel} title="Create Journal" />
      <CustomInputText
        heading={"Title"}
        placeholder={"Enter Title"}
        onChange={onChange}
      />
      <CustomInputText
        heading={"Description"}
        placeholder={"Enter Description"}
        onChange={onChange}
      />
      <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
        <Text style={{color:"#fff"}}>Save</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default CreateScreen;
