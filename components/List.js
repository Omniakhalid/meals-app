import { View, Text, StyleSheet } from "react-native";
export default function List({ data }) {
  return data.map((element) => (
    <View key={element} style={styles.ListItem}>
      <Text>{element}</Text>
    </View>
  ));
}
const styles = StyleSheet.create({
  ListItem: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#f5a442",
  },
});
