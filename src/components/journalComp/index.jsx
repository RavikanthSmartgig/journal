import { View, Text, Image } from "react-native";
import React from "react";
import CardComp from "../cards";
import styles from "./styles";

const JournalComp = ({ title, des, imgUrl }) => {
  return (
    <CardComp>
      <View style={{justifyContent:'space-between',flex:1}}>
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
      </View>
    </CardComp>
  );
};

export default JournalComp;
