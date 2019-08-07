import React from "react";
import { asset, Image, StyleSheet } from "react-360";

class Kedar extends React.Component {
  render() {
    return <Image style={styles.kedar} source={asset(image)} />;
  }
}

const styles = StyleSheet.create({
  kedar: {
    width: "400",
    height: "600"
  }
});

export default Kedar;
