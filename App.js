import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';

import TaskInputField  from './assets/TaskInputField.js';
import TaskItem from './assets/TaskItem.js';
import Testing from './assets/test';


export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
  if(task == null) return;
  
  setTasks([...tasks, task]);
  Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    console.log("deleteTask Started");
    
    console.log(`Index: deleteIndex: ${deleteIndex}`);

    setTasks(tasks.filter((value, index) => index != deleteIndex))
  }

 

  return (

    <View style={styles.container}>
      <Text style={styles.heading}>
        To-Do List
      </Text>

      <ScrollView style={styles.scrollView}>
      {
        tasks.map((task, index) => {
          return(
            <View  style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask ={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>

      <TaskInputField addTask={addTask}></TaskInputField>
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32acd9",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
  },
  scrollView:{
    marginBottom: 70,
  },
  taskContainer:{
    marginTop: 20,
  }


});
//'#32acd9'