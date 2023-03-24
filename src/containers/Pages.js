import { StyleSheet } from "react-native";
import { Heading, Text, View } from "native-base";
import React from "react";

const Pages = () => {
	return (
		<View
			flex={1}
			px="2"
			py="10"
			// alignContent={"center"}
			// justifyContent={"center"}
			backgroundColor="#080606"
		>
			<Heading size="md" color="warmGray.200">
				Pages
			</Heading>
		</View>
	);
};

export default Pages;

const styles = StyleSheet.create({});
