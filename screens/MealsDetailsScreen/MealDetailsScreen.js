import { useContext, useLayoutEffect } from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import List from "../../components/List";
import { MEALS } from "../../data/dummy-data";
import styles from "./MealDetailsStyle";
import IconButton from "../../components/IconButton";
import { FavoritesContext } from "../../store/context/favorites-context";
export default function MealDetailsScreen({ route }) {
  const navigation = useNavigation();
  const { mealId } = route.params;

  //      3- useContext to get data from context 'value'
  const favoriteMealsContext = useContext(FavoritesContext);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  function handleFavBtn() {
    if (mealIsFavorite == false) {
      favoriteMealsContext.addFavorite(mealId);
    } else {
      favoriteMealsContext.removeFavorite(mealId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={handleFavBtn}
          />
        );
      },
    });
  }, [navigation, handleFavBtn]);
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.BackgroundContainer}
      imageStyle={styles.ImageBackground}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Image
            style={styles.MealImage}
            source={{ uri: selectedMeal.imageUrl }}
          />

          <View style={styles.MealDataContainer}>
            <Text style={styles.MealTitle}>{selectedMeal.title}</Text>
            <View style={styles.DetailsData}>
              <Text style={styles.DetailData}>{selectedMeal.duration}m</Text>
              <Text style={styles.DetailData}>
                {selectedMeal.complexity.toUpperCase()}
              </Text>
              <Text style={styles.DetailData}>
                {selectedMeal.affordability.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.SubTitles}>Ingredients</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <List data={selectedMeal.ingredients} />
            </ScrollView>
            <Text style={styles.SubTitles}>Steps</Text>
            <View style={styles.ScrollableList}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {selectedMeal.steps.map((element) => (
                  <View key={element} style={styles.ListItem}>
                    <Text style={styles.StepsText}>{element}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
