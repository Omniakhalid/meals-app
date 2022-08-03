import CategoriesScreen from "./CategoriesScreen";
import MealsScreen from "./MealsScreen";
import MealDetailsScreen from "./MealsDetailsScreen/MealDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
        <Stack.Screen
          name="Details"
          component={MealDetailsScreen}
          options={{
            headerTransparent: true,
            //headerTintColor: "#C91C22",
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
