import React from "react";
import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const AppBar = (props) => {
	return (
		<>
			<StatusBar bg="#3700B3" barStyle="light-content" />
			<Box safeAreaTop bg="violet.600" />
			<HStack
				bg="violet.800"
				px="3"
				py="3"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
			>
				<HStack alignItems="center">
					{props.back ? (
						<IconButton
							icon={
								<Icon size="sm" as={MaterialIcons} name="menu" color="white" />
							}
						/>
					) : null}

					<Text color="white" fontSize="20" fontWeight="bold">
						{props.title}
					</Text>
				</HStack>
				<HStack>
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
