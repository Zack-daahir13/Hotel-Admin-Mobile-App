import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";  // Drawer Navigator ka
import LoginScreen from "./src/screens/Admin/LoginScreen";
import DashboardScreen from "./src/screens/Admin/DashboardScreen";
import SubscriptionScreen from "./src/screens/Admin/SubscriptionScreen";
import CreateHotelScreen from "./src/screens/Admin/CreateHotelScreen";
import UserHomeScreen from "./src/screens/User/UserHomeScreen";
import HotelsScreen from "./src/screens/User/HotelsScreen"; 
import HotelDetails from "./src/screens/User/HotelDetails";

const Drawer = createDrawerNavigator();  // Abuur Drawer navigator

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        {/* Admin Screens */}
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Subscription" component={SubscriptionScreen} />
        <Drawer.Screen name="CreateHotel" component={CreateHotelScreen} />

        {/* User Screens */}
        <Drawer.Screen name="UserHome" component={UserHomeScreen} />
        <Drawer.Screen name="Hotels" component={HotelsScreen} />
        <Drawer.Screen name="HotelDetails" component={HotelDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
