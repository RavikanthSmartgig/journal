import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

import styles from "./styles";
import CustomInputText from "../../components/customInputText";

const INITIAL_VALUE = {
  Title: "",
  Description: "",
};

const CreateScreen = ({ onSave,onCancel }) => {
  const [state, setState] = useState(INITIAL_VALUE);

  const onChange = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const onPress = () => {
    onSave(state);
  };

  return (
    <View style={{ backgroundColor: "#fff", padding: 30, flex: 1 }}>
      <Text>CreateScreen</Text>
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

      <Button title="Save" onPress={onPress} />
      <Text>some text</Text>
      <Button title="cancel" onPress={onCancel} />
    </View>
  );
};

export default CreateScreen;
