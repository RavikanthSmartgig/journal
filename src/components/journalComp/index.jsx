import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CardComp from "../cards";
import styles from "./styles";

const JournalComp = ({ title, des, imgUrl, onDelete,id }) => {
  return (
    <CardComp>
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.des}>{des}</Text>
        </View>
        {/* <Image
          source={{
            uri: imgUrl,
          }}
          width={100}
          height={100}
        /> */}
        <TouchableOpacity onPress={()=>onDelete(id)}>
          <Text style={{ color: "red", fontSize: 24 }}>delete</Text>
        </TouchableOpacity>
      </View>
    </CardComp>
  );
};

export default JournalComp;
