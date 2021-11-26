import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          // }} // for network image we have set height and width
          resizeMode="cover"
        />
      </View>
      <BodyText>
        Number of rounds:{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text>
      </BodyText>
      <BodyText>
        Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
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
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
