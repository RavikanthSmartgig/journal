import { View, Text, Image, FlatList, Button, Modal } from "react-native";
import { useEffect, useState } from "react";

import styles from "./style";
import JournalComp from "../../components/journalComp";
import CountValue from "../../components/countValue";
import CreateScreen from "../create";

const dummyData = [
  {
    header: "Hero 1",
    des: "Description for Hero 1",
    imgUrl:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    header: "Hero 2",
    des: "Description for Hero 2",
    imgUrl:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    header: "Hero 3",
    des: "Description for Hero 3",
    imgUrl:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
];

const Home = () => {
  const [isDisplay, setDisplay] = useState(false);
  const [list, setList] = useState([]);

  useEffect(()=>{
    console.log("list is updated",list)
  },[list])

  const setModalVisible = () => setDisplay(!isDisplay);

  const onSave = (state) => {
    setModalVisible();
    const newList=[...list];
    newList.push(state);
    setList(newList)
  };

  return (
    <View>
      <Button title="createScreen" onPress={setModalVisible} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <JournalComp
            title={item.Title}
            des={item.Description}
            // imgUrl={item.imgUrl}
          />
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDisplay}
        onRequestClose={setModalVisible}
      >
        <CreateScreen onSave={onSave} onCancel={setModalVisible} />
      </Modal>
    </View>
  );
};

export default Home;
