import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatlist: {
    padding: 20,
    marginBottom: 10,
  },
  description: {
    paddingHorizontal: 50,
  },
  card: {
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
  },
  image: {
    height: 130,
    width: 30,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    textAlign: "center",
    padding: 30,
    color: "grey",
  },
});

export default styles;
