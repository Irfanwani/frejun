import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  flatlist: {
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
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
    alignItems: "center",
  },
  image: {
    height: 130,
    width: 30,
  },
  planet: {
    width: 70,
    aspectRatio: 1,
  },
  loader: {
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    textAlign: "center",
    padding: 30,
    color: "grey",
  },
  searchview: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 40,
    marginRight: 20,
    width: width / 1.4,
  },
  searchicons: {
    paddingHorizontal: 10,
  },
  searchinput: {
    width: width / 1.4 - 80,
    paddingVertical: 10,
  },
});

export default styles;
