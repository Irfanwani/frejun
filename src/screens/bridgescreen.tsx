import { FC, memo } from "react";
import { Text, NativeModules, Platform } from "react-native";
import styles from "../components/styles";

const BridgeScreen: FC = () => {
  const fullname =
    NativeModules.MyModule?.getConstants()?.firstname +
    " " +
    NativeModules.MyModule?.getConstants()?.lastname;

  return (
    <Text style={styles.empty}>
      {Platform.OS == "ios"
        ? "My name is: " +
          fullname +
          " and this full name is coming from native module"
        : "Only iOS native module has been implemented"}
    </Text>
  );
};

export default memo(BridgeScreen);
