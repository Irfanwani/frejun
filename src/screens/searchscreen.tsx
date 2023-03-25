import { FC, memo, useState } from "react";
import { FlatList } from "react-native";
import {
  renderItem,
  SearchHeader,
  searchRenderItem,
} from "../components/flatlist";
import styles from "../components/styles";
import { planets } from "../store/dummydata";

const SearchScreen: FC = () => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState(false);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
      data={sort ? [...planets].reverse() : planets}
      renderItem={searchRenderItem}
      keyExtractor={(item) => item.Position.toString()}
      ListHeaderComponent={
        <SearchHeader value={value} setValue={setValue} sort={sort} setSort={setSort} />
      }
    />
  );
};

export default memo(SearchScreen);
