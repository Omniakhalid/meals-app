import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  BackgroundContainer: { flex: 1 },
  ImageBackground: { opacity: 0.1 },
  MealImage: {
    width: "100%",
    height: 300,
  },
  ScrollableList: {
    height: 300,
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
  StepsText: {
    color: "black",
    paddingLeft: 15,
    marginLeft: 12,
    marginBottom: 10,
    fontSize: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#f5a442",
  },
});
