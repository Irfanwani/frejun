import { FC, memo } from "react";
import Main from "./src/main";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { StatusBar } from "react-native";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Main />
      <StatusBar translucent backgroundColor="transparent" />
    </Provider>
  );
};

export default memo(App);
