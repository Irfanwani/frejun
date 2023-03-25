import { FC, memo } from "react";
import { FlatList } from "react-native";
import { renderItem, searchRenderItem } from "../components/flatlist";
import styles from "../components/styles";
import { planets } from "../store/dummydata";

const SearchScreen: FC = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
      data={planets}
      renderItem={searchRenderItem}
      keyExtractor={(item) => item.Position.toString()}
    />
  );
};

export default memo(SearchScreen);
