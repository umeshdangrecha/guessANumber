import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import BodyText from "./BodyText";

const GuessesList = (props) => {
  return (
    <View style={styles.listContainer}>
      {/*<ScrollView contentContainerStyle={styles.list}>
        {props.list.map((guess, index) => (
          <View style={styles.listItem} key={guess}>
            <BodyText>#{props.list.length - index}</BodyText>
            <BodyText>{guess}</BodyText>
          </View>
        ))}
        </ScrollView>*/}
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item}
        data={props.list}
        renderItem={(data) => (
          <View style={styles.listItem}>
            <BodyText>#{props.list.length - data.index}</BodyText>
            <BodyText>{data.item}</BodyText>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "60%",
    flex: 1,
  },
  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "black",
    padding: 15,
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    width: "100%",
  },
});

export default GuessesList;
