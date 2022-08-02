import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { ImageBackground, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
//import { useRoute } from "@react-navigation/native";

export default function MealsScreen({ route }) {
  //const route = useRoute();
  //if your component not registered use this hook to get param 'useRoute()'
  const { categoryId } = route.params;
  const navigation = useNavigation();
  /** the title is loaded after the animation and this is a bad ux so we will use "useLayoutEffect" ==> execute or set some side effect before the component has been rendered
   * before component function has been executed
   */
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (cate) => cate.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);
  const fetchedMeals = MEALS.filter(
    (id) => id.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.BackgroundContainer}
      imageStyle={styles.ImageBackground}
    >
      <FlatList
        data={fetchedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem MealItem={item} />}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  MealsContainer: {
    flex: 1,
    //padding: 16,
  },
  BackgroundContainer: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.1,
  },
});
