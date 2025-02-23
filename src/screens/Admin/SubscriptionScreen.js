import React from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";

const SubscriptionScreen = ({ navigation }) => {
  const handlePayment = () => {
    Alert.alert("Payment Successful", "You have subscribed successfully!");
    navigation.navigate("CreateHotel");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Required</Text>
      <Text style={styles.info}>Please pay $50 to continue.</Text>
      <Button title="Pay $50" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 20 },
});

export default SubscriptionScreen;
