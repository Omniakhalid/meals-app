import MainScreen from "./screens/MainScreen";
import { StatusBar } from "react-native";
//import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealsDetailsScreen/MealDetailsScreen";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#991317" />
      <MainScreen />
    </>
  );
}
