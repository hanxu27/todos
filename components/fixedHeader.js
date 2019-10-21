import React from "react";
import { Header, Icon } from "react-native-elements";

const fixedHeader = () => {
  return (
    <Header
      leftComponent={
        <Icon
          name="plus"
          type="font-awesome"
          color="#fff"
          onPress={() => console.log("new task")}
        />
      }
      centerComponent={{ text: "Todos", style: { color: "#fff" } }}
      rightComponent={
        <Icon name="list" type="font-awesome" color="#fff" onPress={() => console.log("list")} />
      }
    />
  );
};

export default fixedHeader;
