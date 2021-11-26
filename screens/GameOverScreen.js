import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: "100%" },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    width: 300,
    height: 300,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
});

export default GameOverScreen;
