import { FC } from "react";
import { View, Image, Text, TextInput } from "react-native";
import styles from "./styles";
import { BeerType } from "../store/types";
import { SearchHeaderProps } from "./types";
import Octicons from "@expo/vector-icons/Octicons";

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
  return (
    <View style={styles.searchview}>
      <TextInput
        // style={styles.searchbar}
        placeholder="Search..."
        value={value}
        onChangeText={setValue}
      />
      <Octicons
        onPress={changeSort}
        name={sort ? "sort-desc" : "sort-asc"}
        size={30}
        color="teal"
      />
    </View>
  );
};
