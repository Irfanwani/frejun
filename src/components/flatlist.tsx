import { FC } from "react";
import { View, Image, Text, TextInput } from "react-native";
import styles from "./styles";
import { BeerType } from "../store/types";
import { SearchHeaderProps } from "./types";
import Octicons from "@expo/vector-icons/Octicons";
import Antdesign from "@expo/vector-icons/AntDesign";

export const renderItem = ({ item }: { item: BeerType }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <View style={styles.description}>
        <Text style={styles.title}>{item.tagline}</Text>
        <Text numberOfLines={5} ellipsizeMode="tail">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export const Empty: FC = () => {
  return <Text style={styles.empty}>Nothing to show!</Text>;
};

export const searchRenderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.planet} source={{ uri: item.image }} />
      <View style={styles.description}>
        {Object.keys(item).map(
          (e, index) =>
            e != "image" && (
              <Text key={index} style={e == "Name" ? styles.title : null}>
                {e != "Name" ? `${e}: ` : null}
                {item[e]}
              </Text>
            )
        )}
      </View>
    </View>
  );
};

export const SearchHeader: FC<SearchHeaderProps> = ({
  value,
  setValue,
  sort,
  setSort,
}) => {
  const changeSort = () => {
    setSort((prev) => !prev);
  };

  const resetSearch = () => {
    setValue("");
  };
  return (
    <View style={styles.searchview}>
      <View style={styles.searchbar}>
        <Octicons name="search" size={20} style={styles.searchicons} />
        <TextInput
          style={styles.searchinput}
          placeholder="Search By Name"
          value={value}
          onChangeText={setValue}
        />
        {value ? (
          <Antdesign
            onPress={resetSearch}
            name="closecircleo"
            size={20}
            style={styles.searchicons}
          />
        ) : null}
      </View>

      <Octicons
        onPress={changeSort}
        name={sort ? "sort-desc" : "sort-asc"}
        size={30}
        color="teal"
      />
    </View>
  );
};
