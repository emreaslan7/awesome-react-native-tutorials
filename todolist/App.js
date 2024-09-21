import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Task from "./components/Task";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    let newTask = {
      id: Math.random(),
      text: task,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const completeTask = (index) => {
    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskBarWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {tasks.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completeTask(index)}
                style={styles.taskMenu}
              >
                <Task task={item} />
                <TouchableOpacity
                  style={styles.deleteIcon}
                  onPress={() => {
                    deleteTask(index);
                  }}
                >
                  <MaterialIcons name="delete" size={24} color="#55BCF6" />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 36,
    color: "gray",
    fontWeight: "200",
  },
  taskMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  deleteIcon: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
});
