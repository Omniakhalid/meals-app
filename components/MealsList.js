import { ImageBackground, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

export default function MealsList({ items }) {
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.BackgroundContainer}
      imageStyle={styles.ImageBackground}
    >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem MealItem={item} />}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  BackgroundContainer: { flex: 1 },
  ImageBackground: { opacity: 0.1 },
});
