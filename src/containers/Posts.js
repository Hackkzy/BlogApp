import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { getPosts } from "../lib/api";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import {
	FlatList,
	Text,
	Box,
	AspectRatio,
	Heading,
	HStack,
	Stack,
	Center,
	Spinner,
	Image,
	View,
} from "native-base";

const Posts = ({ navigation }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [lastPage, setLastPage] = useState(false);
	const { width } = useWindowDimensions();

	useEffect(() => {
		const route = `posts?per_page=10&page=${page}&_fields=title,excerpt,date`;
		getPosts(route).then((res) => {
			if (res.code !== "rest_post_invalid_page_number") {
				setPosts((prevPosts) => [...prevPosts, ...res]);
			} else {
				setLastPage(true);
			}
			setLoading(false);
		});
	}, [page]);
	return (
		<View flex={1} px="2" alignContent={"center"} justifyContent={"center"}>
			{posts.length > 0 ? (
				<FlatList
					onEndReached={() => {
						if (!loading && !lastPage) {
							setPage((prevPage) => prevPage + 1);
						}
					}}
					keyExtractor={(item, index) => index}
					data={posts}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate("Post", { post_id: item.id })}
						>
							<Box
								rounded="lg"
								overflow="hidden"
								borderColor="coolGray.200"
								borderWidth="1"
								m="1"
								_dark={{
									borderColor: "coolGray.600",
									backgroundColor: "gray.700",
								}}
								_web={{
									shadow: 2,
									borderWidth: 0,
								}}
								_light={{
									backgroundColor: "gray.50",
								}}
							>
								<Box>
									<AspectRatio w="100%" ratio={16 / 9}>
										<Image
											source={{
												uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
											}}
											alt="image"
										/>
									</AspectRatio>
									<Center
										bg="violet.500"
										_dark={{
											bg: "violet.400",
										}}
										_text={{
											color: "warmGray.50",
											fontWeight: "700",
											fontSize: "xs",
										}}
										position="absolute"
										bottom="0"
										px="3"
										py="1.5"
									>
										Post
									</Center>
								</Box>
								<Stack p="4" space={3}>
									<Stack space={2}>
										<Heading size="md" ml="-1">
											{item.title.rendered}
										</Heading>
									</Stack>
									<RenderHTML
										contentWidth={width}
										source={{ html: item.excerpt.rendered }}
									/>
									<HStack
										alignItems="center"
										space={4}
										justifyContent="space-between"
									>
										<HStack alignItems="center">
											<Text
												color="coolGray.600"
												_dark={{
													color: "warmGray.200",
												}}
												fontWeight="400"
											>
												{item.date}
											</Text>
										</HStack>
									</HStack>
								</Stack>
							</Box>
						</TouchableOpacity>
					)}
				/>
			) : (
				<Center flex={1} px="3">
					<HStack space={2} justifyContent="center">
						<Spinner accessibilityLabel="Loading posts" />
						<Heading color="primary.500" fontSize="md">
							Loading
						</Heading>
					</HStack>
				</Center>
			)}
		</View>
	);
};

Posts.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default Posts;
