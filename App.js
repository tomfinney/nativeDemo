import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [touched, setTouched] = useState(0);

  function handlePress() {
    setTouched(prevTouched => prevTouched + 1);
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
          <Text style={{ color: "white" }}>Touch</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>
          has been touched: {touched} times
        </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
}
