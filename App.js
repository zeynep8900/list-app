import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableOpacity, Text } from "react-native";
import Header from "./components/Header";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: Math.random().toString(), text: "Apples", checked: false },
    { id: Math.random().toString(), text: "Bananas", checked: false },
    { id: Math.random().toString(), text: "Oranges", checked: false },
    { id: Math.random().toString(), text: "Cheese", checked: false },
    { id: Math.random().toString(), text: "Bread", checked: false },
    { id: Math.random().toString(), text: "Eggs", checked: false },
    { id: Math.random().toString(), text: "Milk", checked: false },
    { id: Math.random().toString(), text: "Butter", checked: false },
    { id: Math.random().toString(), text: "Juice", checked: false },
    { id: Math.random().toString(), text: "Cereal", checked: false },
    { id: Math.random().toString(), text: "Yogurt", checked: false },
    { id: Math.random().toString(), text: "Tomatoes", checked: false },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const toggleChecked = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("❗Enter item to add", " Item name cannot be empty.", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK" },
      ]);
      return;
    } else {
      setItems((prevItems) => {
        return [{ id: Math.random().toString(), text, checked: false }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title=" My List :)" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleChecked(item.id)} style={styles.listItem}>
            <Text style={{ textDecorationLine: item.checked ? "line-through" : "none" }}>{item.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#698195",
  },
  listItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});

export default App;
