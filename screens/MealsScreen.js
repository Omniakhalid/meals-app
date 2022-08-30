import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

export default function MealsScreen({ route }) {
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

  return <MealsList items={fetchedMeals} />;
}
