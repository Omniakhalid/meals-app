import {
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from "react-native";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
export default function CategoriesScreen() {
  const navigation = useNavigation();
  function handleOnPress(item) {
    navigation.navigate("Meals", { categoryId: item.id });
  }
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.BackgroundContainer}
      imageStyle={styles.ImageBackground}
    >
      <Text style={[styles.HeaderText, { marginTop: 20 }]}>
        Pick your category
      </Text>
      <Text style={styles.HeaderText}>of interest</Text>
      <FlatList
        style={styles.ListContainer}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryItem categoryData={item} onPress={handleOnPress} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ListContainer: { padding: 20 },
  HeaderText: {
    marginLeft: 18,
    fontWeight: "bold",
    fontSize: 24,
    color: "#4F5A69",
  },
  BackgroundContainer: { flex: 1 },
  ImageBackground: { opacity: 0.1 },
});
