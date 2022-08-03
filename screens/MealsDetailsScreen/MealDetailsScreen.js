import {
  ImageBackground,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import List from "../../components/List";
import { MEALS } from "../../data/dummy-data";
import styles from "./MealDetailsStyle";
export default function MealDetailsScreen({ route }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
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
            <View style={styles.ScrollableList}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <List data={selectedMeal.ingredients} />
              </ScrollView>
            </View>
            <Text style={styles.SubTitles}>Steps</Text>
            <View style={styles.ScrollableList}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <List data={selectedMeal.steps} />
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
