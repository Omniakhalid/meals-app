import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  BackgroundContainer: { flex: 1 },
  ImageBackground: { opacity: 0.1 },
  MealImage: {
    width: "100%",
    height: 300,
  },
  ScrollableList: {
    height: 170,
  },
  MealDataContainer: {
    flexGrow: 1,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: "#efefef",
    position: "relative",
    top: -40,
    padding: 20,
  },
  MealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4F5A69",
  },
  DetailsData: {
    flexDirection: "row",
  },
  DetailData: {
    margin: 7,
    fontSize: 14,
  },
  SubTitles: {
    padding: 8,
    fontWeight: "bold",
    fontSize: 18,
  },
});
