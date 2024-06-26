import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "My List",
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 10,
    backgroundColor: "#364f62",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
});

export default Header;
