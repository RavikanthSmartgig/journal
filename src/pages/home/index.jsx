import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import JournalComp from "../../components/journalComp";
import CreateScreen from "../create";
import CustomButton from "../../components/btn";
import Header from "../../components/headerComp";
import { home } from "../../hook";

const Home = () => {
  const {
    list,
    isDisplay,
    setModalVisible,
    onSave,
    onEdit,
    isEdit,
    editData,
    deleteJournal,
    onDelete
  } = home();
  return (
    <View style={{ flex: 1, paddingTop: 10, alignItems: "center" }}>
      <Header onCancel={() => {}} title="Home" />
      <FlatList
        horizontal={false}
        numColumns={2}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onEdit(item)}>
            <JournalComp
              title={item.title}
              des={item.description}
              onDelete={onDelete}
              id={item._id}
              // imgUrl={item.imgUrl}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.btnContainer}>
        <CustomButton onPress={setModalVisible} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDisplay}
        onRequestClose={setModalVisible}
      >
        <CreateScreen
          onSave={onSave}
          onCancel={setModalVisible}
          isEdit={isEdit}
          editData={editData}
        />
      </Modal>
    </View>
  );
};

export default Home;
