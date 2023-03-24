import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import React from "react";
import Home from "../containers/Home";
import Pages from "../containers/Pages";
import Posts from "../containers/Posts";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#f92033",
				tabBarInactiveTintColor: "#000",
				tabBarShowLabel: false,
				animationEnabled: true,
				tabBarStyle: [
					{
						marginLeft: 50,
						marginRight: 50,
						marginBottom: 20,
						borderRadius: 10,
						borderTopWidth: 0,
						position: "absolute",
						paddingHorizontal: 20,
						backgroundColor: "#d7d8dd",
					},
					null,
				],
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Posts"
				component={Posts}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? "newspaper" : "newspaper-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Pages"
				component={Pages}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? "documents" : "documents-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
