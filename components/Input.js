import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 10,
  },
});

export default Input;
