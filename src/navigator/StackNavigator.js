import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Posts from "../containers/Posts";
import SinglePost from "../containers/SinglePost";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Posts}
				options={{
					title: "BiliPlugins",
				}}
			/>
			<Stack.Screen name="Post" component={SinglePost} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
