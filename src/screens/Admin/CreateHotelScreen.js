import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";

const CreateHotelScreen = ({ navigation }) => {
  const [hotelName, setHotelName] = useState("");
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  const addRoom = () => {
    if (roomName) {
      setRooms([...rooms, roomName]);
      setRoomName("");
    } else {
      Alert.alert("Error", "Please enter a room name");
    }
  };

  const handleSubmit = () => {
    const hotelData = {
      name: hotelName,
      rooms: rooms,
    };

    // Save data to local storage
    const existingHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    localStorage.setItem("hotels", JSON.stringify([...existingHotels, hotelData]));

    Alert.alert("Hotel Created", "Your hotel has been added!");
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Hotel</Text>
      <TextInput
        placeholder="Hotel Name"
        style={styles.input}
        value={hotelName}
        onChangeText={setHotelName}
      />
      <TextInput
        placeholder="Room Name"
        style={styles.input}
        value={roomName}
        onChangeText={setRoomName}
      />
      <Button title="Add Room" onPress={addRoom} />
      <FlatList
        data={rooms}
        renderItem={({ item }) => <Text style={styles.room}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12, borderRadius: 4 },
  room: { fontSize: 16, marginBottom: 4 },
});

export default CreateHotelScreen;
