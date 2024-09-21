import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task({ task }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {task.isCompleted ? (
          <MaterialIcons
            name="check"
            size={24}
            color="green"
            style={styles.checkIcon}
          /> // Tik ikonu
        ) : (
          <View style={styles.square} />
        )}
        <Text
          style={[
            styles.itemText,
            { textDecorationLine: task.isCompleted ? "line-through" : "none" },
          ]}
        >
          {task.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  checkIcon: {
    marginRight: 15,
  },
});
