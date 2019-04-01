import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles.scss";

export default function App() {
  const [pressed, setPressed] = useState(0);

  function handlePress() {
    setPressed(prevPressed => prevPressed + 1);
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View
        style={{
          flex: 2,
          backgroundColor: "skyblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#444",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 16,
            marginBottom: 16
          }}
          onPress={handlePress}
        >
          <Text style={{ color: "white" }}>Press</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>
          Button has been pressed:{" "}
          <Text style={{ fontWeight: "bold" }}>{pressed}</Text> times
          {"\n"}
          {"\n"}
          <Text className={styles.blue}>Blue TEXT!</Text>
        </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
}
