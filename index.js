import React from "react";
import { AppRegistry, StyleSheet, View } from "react-360";
import Kedar from "./components/Kedar";

export default class FlyingKedar extends React.Component {
  render() {
    return <View style={styles.mainView} />;
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: 4680,
    height: 600,
    opacity: 0.3,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent("FlyingKedar", () => FlyingKedar);
AppRegistry.registerComponent("Kedar", () => Kedar);
