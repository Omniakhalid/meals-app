import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({ MealItem }) {
  const navigation = useNavigation();
  function handleOnPress() {
    navigation.navigate("Details", { mealId: MealItem.id });
  }
  return (
    <View style={styles.MealContainer}>
      <Pressable
        android_ripple={{ color: "#CCC" }}
        style={({ pressed }) => (pressed ? styles.ButtonPressed : null)}
        onPress={handleOnPress}
      >
        <View style={styles.InnerContainer}>
          <View>
            <Image
              source={{ uri: MealItem.imageUrl }}
              style={styles.MealImage}
            />
            <Text style={styles.MovieTitle}>{MealItem.title}</Text>
          </View>
          <View style={styles.DetailsData}>
            <Text style={styles.DetailData}>{MealItem.duration}m</Text>
            <Text style={styles.DetailData}>
              {MealItem.complexity.toUpperCase()}
            </Text>
            <Text style={styles.DetailData}>
              {MealItem.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  MealContainer: {
    margin: 16,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  InnerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  MealImage: {
    width: "100%",
    height: 250,
  },
  MovieTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    margin: 8,
  },
  DetailsData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  DetailData: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  ButtonPressed: {
    opacity: 0.5,
  },
});
