import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
export default function CategoryItem({ categoryData, onPress }) {
  function handleOnPress() {
    onPress(categoryData);
  }
  return (
    <View
      style={[styles.CategoryItem, { backgroundColor: categoryData.color }]}
    >
      <Pressable
        android_ripple={{ color: "#CCC" }}
        style={({ pressed }) => [
          styles.Button,
          pressed ? styles.ButtonPressed : null,
        ]}
        onPress={handleOnPress}
      >
        <View style={styles.InnerContainer}>
          <Image source={categoryData.image} style={styles.ImageStyle} />
          <Text style={styles.title}>{categoryData.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  CategoryItem: {
    flex: 1,
    height: 171,
    margin: 8,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  ButtonPressed: { opacity: 0.5 },
  Button: { flex: 1 },
  ImageStyle: {
    height: 120,
    width: 120,
    resizeMode: "cover",
  },
  InnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
