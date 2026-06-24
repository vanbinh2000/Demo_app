import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";

type ItemType = {
  id: string;
  title: string;
  description: string;
};

const DATA: ItemType[] = [
  { id: "1", title: "Tin tức 1", description: "Nội dung tin tức 1" },
  { id: "2", title: "Tin tức 2", description: "Nội dung tin tức 2" },
  { id: "3", title: "Tin tức 3", description: "Nội dung tin tức 3" },
  { id: "4", title: "Tin tức 4", description: "Nội dung tin tức 4" },
];

export default function HomeScreen() {
  const onPressItem = (item: ItemType) => {
    Alert.alert("Bạn chọn", item.title);
  };

  const renderItem = ({ item }: { item: ItemType }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPressItem(item)}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>🏠 Home Screen</Text>
      </View>

      {/* List */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => Alert.alert("Thêm mới")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },

  header: {
    backgroundColor: "#4a90e2",
    padding: 16,
  },

  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  list: {
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

  desc: {
    fontSize: 13,
    color: "#666",
  },

  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
  },

  fabText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
});