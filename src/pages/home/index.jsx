import { View, Text, Image, FlatList } from "react-native";
import styles from "./style";
import JournalComp from "../../components/journalComp";

const dummyData = [
  {
    header: "Hero 1",
    des: "Description for Hero 1",
    imgUrl: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    header: "Hero 2",
    des: "Description for Hero 2",
    imgUrl: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    header: "Hero 3",
    des: "Description for Hero 3",
    imgUrl: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
];

const Home = () => {
  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <JournalComp title={item.header} des={item.des} imgUrl={item.imgUrl} />
        )}
      />
   
    </View>
  );
};

export default Home;
