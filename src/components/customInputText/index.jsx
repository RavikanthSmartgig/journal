import { View, Text,TextInput } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./styles";

const CustomInputText = ({heading,placeholder,onChange}) => {
const [text,setText]= useState("");

useEffect(()=>{
  onChange(heading,text)
},[text])

const onChangeText=(txt)=>setText(txt)

  return (
    <View>
      <Text>{heading}</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default CustomInputText;
