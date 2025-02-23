import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
//import Footer from "../components/Footer";

const UserHomeScreen = ({ navigation }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotels(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Hotels</Text>
      <FlatList
        data={hotels}
        renderItem={({ item }) => (
          <View style={styles.hotel}>
            <Text>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate("HotelDetail", { hotel: item })}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  hotel: { marginBottom: 16, padding: 12, backgroundColor: "#f0f0f0" },
});

{/* <View style={{ flex: 1 }}>
  <FlatList
    // Existing FlatList code
  />
  <Footer />
</View> */}

export default UserHomeScreen;
