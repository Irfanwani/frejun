import { FC } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

export const Loader: FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color="teal" />
    </View>
  );
};
