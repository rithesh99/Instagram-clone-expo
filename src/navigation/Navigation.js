import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "../pages/Home";

import { Foundation } from "@expo/vector-icons";
import { Ionicons, FontAwesome, Feather, AntDesign } from '@expo/vector-icons'; 

import Search from "../pages/Search";
import Add from "../pages/Add";
import Activities from "../pages/Activities";
import Profile from "../pages/Profile";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

function DashboardPage() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelStyle: { fontSize: 12, color: "#515253" },
        style: {
          width: "auto",
        },
        showLabel: false ,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Foundation name="home" size={24} color={focused ? "black": "#d1d1d1"} />
          ),
        }}
        
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="search" size={24} color={focused ? "black": "#d1d1d1"} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="plus-square" size={24} color={focused ? "black": "#d1d1d1"} />

          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="heart" size={24} 
            color={focused ? "black": "#d1d1d1"} />
           
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="md-person-sharp" size={24} color={focused ? "black": "#d1d1d1"}/>
          ),
        }}
      />
      
    
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="DashboardPage" component={DashboardPage} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
