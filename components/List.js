import { View, Text, StyleSheet } from "react-native";
export default function List({ data }) {
  return data.map((element) => (
    <View key={element} style={styles.ListItem}>
      <Text style={styles.Text}>{element}</Text>
    </View>
  ));
}
const styles = StyleSheet.create({
  Text: {
    color: "white",
  },
  ListItem: {
    borderRadius: 12,
    padding: 7,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginBottom: 12,
    marginHorizontal: 10,
    backgroundColor: "#f5a442",
    elevation: 5,
  },
});
