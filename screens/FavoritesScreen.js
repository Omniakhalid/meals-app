import { useContext } from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
export function FavoritesScreen() {
  const favMealsCtx = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) => favMealsCtx.ids.includes(meal.id));
  return <MealsList items={favMeals} />;
}
