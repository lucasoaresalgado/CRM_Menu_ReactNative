import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function MenuBar() {
  return (
    <View style={styles.menuBar}>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="person-outline" size={24} color="#fff" />
        <Text style={styles.menuItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="people-outline" size={24} color="#fff" />
        <Text style={styles.menuItemText}>Leads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="calendar-outline" size={24} color="#fff" />
        <Text style={styles.menuItemText}>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="stats-chart-outline" size={24} color="#fff" />
        <Text style={styles.menuItemText}>Insights</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="settings-outline" size={24} color="#fff" />
        <Text style={styles.menuItemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: "#007bff",
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: "left"
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff"
  }
});
