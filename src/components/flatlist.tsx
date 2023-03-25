import { FC } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

export const renderItem = ({ item }) => {
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
    return <Text style={styles.empty}>
        Nothing to show!
    </Text>
}