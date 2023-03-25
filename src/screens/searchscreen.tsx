import { FC, memo, useMemo, useState } from "react";
import { FlatList } from "react-native";
import { SearchHeader, searchRenderItem } from "../components/flatlist";
import styles from "../components/styles";
import { planets } from "../store/dummydata";

const SearchScreen: FC = () => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState(false);

  const data = useMemo(() => {
    let planetlist = sort ? [...planets].reverse() : planets;
    return planetlist.filter((item) =>
      item.Name.toLowerCase().includes(value.toLocaleLowerCase())
    );
  }, [sort, value]);

  return (
    <FlatList
      automaticallyAdjustKeyboardInsets
      keyboardDismissMode="none"
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
      data={data}
      renderItem={searchRenderItem}
      keyExtractor={(item) => item.Position.toString()}
      ListHeaderComponent={
        <SearchHeader
          value={value}
          setValue={setValue}
          sort={sort}
          setSort={setSort}
        />
      }
    />
  );
};

export default memo(SearchScreen);
