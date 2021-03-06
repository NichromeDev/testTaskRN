import React from "react";
import { StyleSheet, Text } from "react-native";

export default props => <Text {...props} style={[styles.text, props.style]}>{props.children}</Text>

const styles = StyleSheet.create({
  text: {
    //fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19
  },
});