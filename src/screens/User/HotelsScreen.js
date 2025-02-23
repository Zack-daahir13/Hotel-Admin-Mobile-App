import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const HotelsScreen = ({ navigation }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Halkan xogta hotelada kala soo bixi
    const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotels(storedHotels);
  }, []);

  const handleSelectHotel = (hotel) => {
    // Ku gudub page-ka details-ka hotel-ka
    navigation.navigate("HotelDetails", { hotel });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Hotels</Text>
      <FlatList
        data={hotels}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSelectHotel(item)}
          >
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.hotelDetails}>
              {item.rooms} Rooms | ${item.pricePerNight} per night
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  hotelDetails: {
    fontSize: 14,
    color: "#555",
  },
});

export default HotelsScreen;
