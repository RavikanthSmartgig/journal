import { View, Text } from "react-native";
import React,{useEffect,useState} from "react";

const home = () => {
  const [isDisplay, setDisplay] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("list is updated", list);
  }, [list]);

  const setModalVisible = () => setDisplay(!isDisplay);

  const onSave = (state) => {
    setModalVisible();
    const newList = [...list];
    newList.push(state);
    setList(newList);
  };
  return {
    onSave,
    setModalVisible,
    isDisplay,
    list,
  };
};

export default home;
