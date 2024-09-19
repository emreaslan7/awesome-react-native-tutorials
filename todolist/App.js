import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Task from "./components/Task";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskBarWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          <TouchableOpacity style={styles.item}>
            <Task text={"Task 1"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskBarWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
