import React from "react";
import { View, Button, StyleSheet } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Add Service (Subscription)"
        onPress={() => navigation.navigate("Subscription")}
      />
      <Button
        title="Create Hotel"
        onPress={() => navigation.navigate("CreateHotel")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default DashboardScreen;
