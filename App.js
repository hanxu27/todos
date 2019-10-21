import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Button } from "react-native-elements";
import FixedHeader from "./components/fixedHeader";

const dummyTasks = [
  {
    name: "flexbox",
    category: "learning",
    progress: 0,
    description: "play around and find a cheat sheet"
  },
  {
    name: "SQL commands",
    category: "learning",
    progress: 0,
    description: "table creation and change commands"
  },
  {
    name: "passport",
    category: "chores",
    progress: 1,
    description: "get forms take photo sent out mail"
  },
  { name: "quarter rounds", category: "condo", progress: 2, description: "finished the last wall" },
  { name: "washer dryer", category: "condo", progress: 0, description: "such dollar signs" }
];

const progressColors = ["#606060", "#89EE16", "#166CEE"];

export default function App() {
  console.log("Hello php");
  return (
    <View>
      <FixedHeader />
      {dummyTasks.map((task, i) => (
        <ListItem
          key={i}
          title={task.name}
          subtitle={task.category}
          bottomDivider
          containerStyle={{ backgroundColor: progressColors[task.progress] }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
