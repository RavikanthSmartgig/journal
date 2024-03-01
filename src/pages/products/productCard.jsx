import { View, Text } from "react-native";
import React from "react";

// pId: string;
// pName: string;
// price: number;

const ProductCard = ({item}) => {
    const {pId,pName,price} =item
  //pId,pName,price
//   console.log("props", props);
  return (
    <View>
      <Text>{pId}</Text>
      <Text>{pName}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default ProductCard;
