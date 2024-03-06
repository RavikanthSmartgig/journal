import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, Button } from "react-native";
import Home from "./src/pages/home";
import Product from "./src/pages/products";

import axios from "axios";
import { API_END_POINTS, BASE_URL } from "./src/constants";

import {
  getAllUser,
  createUser,
  getAllProducts,
  createProduct,
} from "./src/service";

export default function App() {
  // useEffect(() => {
    // getAllUser();
    // getAllProducts();
    // createProduct();
    // createUser({
    //   email: "Ravi@smartgig.tech",
    //   phoneNumber: 9098765421,
    //   fullName: "Ravikanth",
    // });
    // axios
    //   .get(`${BASE_URL}+${API_END_POINTS.getUsers}`)
    //   .then(function (response) {
    //     // handle success
    //     console.log("api response",JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
    //   axios
    //   .get(`${BASE_URL}+${API_END_POINTS.getProduct}`)
    //   .then(function (response) {
    //     // handle success
    //     console.log("api user",JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Product /> */}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,

    // alignItems: "center",
    // justifyContent: "center",
  },
});
