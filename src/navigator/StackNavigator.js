import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SinglePost from "../containers/SinglePost";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="BiliPlugins" component={BottomTabNavigator} />
			<Stack.Screen name="Post" component={SinglePost} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
