import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HotelDetails = ({ route }) => {
  const { hotel } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hotel.name}</Text>
      <Text style={styles.details}>Rooms: {hotel.rooms}</Text>
      <Text style={styles.details}>Price per Night: ${hotel.pricePerNight}</Text>
      <Text style={styles.details}>Location: {hotel.location}</Text>
      {/* Ku dar button haddii uu user rabo inuu booking sameeyo */}
      <Button title="Book Now" onPress={() => alert("Booking Completed!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HotelDetails;
