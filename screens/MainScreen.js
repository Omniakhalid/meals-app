import CategoriesScreen from "./CategoriesScreen";
import MealsScreen from "./MealsScreen";
import MealDetailsScreen from "./MealsDetailsScreen/MealDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoritesScreen } from "./FavoritesScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          //#991317 C91C22  red
          backgroundColor: "#C91C22",
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}
export default function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Meals" component={MealsScreen} />
        <Stack.Screen
          name="Details"
          component={MealDetailsScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
