import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const AppBar = ({ navigation, back }) => {
	return (
		<>
			<StatusBar bg="#3700B3" barStyle="light-content" />
			<Box safeAreaTop bg="violet.600" />
			{back ? (
				<IconButton
					icon={
						<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />
					}
					onPress={navigation.goBack}
				/>
			) : null}
			<HStack
				bg="violet.800"
				px="3"
				py="3"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
			>
				<HStack alignItems="center">
					<Text color="white" fontSize="20" fontWeight="bold">
						BiliPlugins
					</Text>
				</HStack>
				<HStack>
					<IconButton
						icon={
							<Icon
								as={MaterialIcons}
								name="favorite"
								size="sm"
								color="white"
							/>
						}
					/>
					<IconButton
						icon={
							<Icon as={MaterialIcons} name="search" size="sm" color="white" />
						}
					/>
					<IconButton
						icon={
							<Icon
								as={MaterialIcons}
								name="more-vert"
								size="sm"
								color="white"
							/>
						}
					/>
				</HStack>
			</HStack>
		</>
	);
};

export default AppBar;
