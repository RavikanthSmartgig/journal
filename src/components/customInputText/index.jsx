import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import MIcon from "@expo/vector-icons/MaterialCommunityIcons";

import styles from "./styles";

const CustomInputText = ({ heading, placeholder, onChange, value }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    onChange(heading, text);
  }, [text]);
  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  const onChangeText = (txt) => setText(txt);

  return (
    <View style={{ paddingTop: 10 }}>
      <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "900" }}>
        {heading}
      </Text>
      <View style={styles.inputBox}>
        <MIcon name="account" color={"blue"} size={18} />
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
