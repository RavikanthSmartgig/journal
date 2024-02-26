import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, Button } from "react-native";
import Home from './src/pages/home'

export default function App() {


  return (
    <View style={styles.container}>
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
