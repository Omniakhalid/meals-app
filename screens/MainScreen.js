import CategoriesScreen from "./CategoriesScreen";
import MealsScreen from "./MealsScreen";
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
            //A84622  D1582B  orange
            backgroundColor: "#C91C22",
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
