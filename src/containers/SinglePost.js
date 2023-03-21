import { useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { getPosts } from "../lib/api";
import RenderHtml from "react-native-render-html";
import { Heading, HStack, ScrollView, Spinner, View } from "native-base";

const SinglePost = ({ route, navigation }) => {
	const { width } = useWindowDimensions();
	const { post_id } = route.params;
	const [post, setPost] = useState([]);

	useEffect(() => {
		const route = `posts/${post_id}`;
		getPosts(route).then((res) => {
			setPost(res);
		});
	}, []);

	return (
		<View flex={1} px="3" justifyContent={"center"}>
			{post.length !== 0 ? (
				<ScrollView w="100%">
					<Heading>{post.title.rendered}</Heading>
					<RenderHtml
						contentWidth={width}
						source={{ html: post.content.rendered }}
					/>
				</ScrollView>
			) : (
				<HStack space={2} justifyContent="center">
					<Spinner accessibilityLabel="Loading posts" />
					<Heading color="primary.500" fontSize="md">
						Loading
					</Heading>
				</HStack>
			)}
		</View>
	);
};

export default SinglePost;
