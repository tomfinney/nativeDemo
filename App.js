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
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: "#333",
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
      <Text>has been touched: {touched} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
