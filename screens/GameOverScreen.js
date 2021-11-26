import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game over</TitleText>
      <Image source={require("../assets/success.png")} />
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default GameOverScreen;
