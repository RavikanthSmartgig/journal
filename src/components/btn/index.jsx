import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MIcon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <MIcon name="plus" onPress={onPress} size={24} />
    </TouchableOpacity>
  );
};

export default CustomButton;
