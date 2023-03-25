import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootNavigatorProps = {
  mainscreen: undefined;
  searchscreen: undefined;
  bridgescreen: undefined;
};

export type MainScreenProps = BottomTabScreenProps<
  RootNavigatorProps,
  "mainscreen"
>;
