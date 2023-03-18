import {
	StyleSheet,
	Text,
	ScrollView,
	useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPosts } from "../lib/api";
import RenderHtml from "react-native-render-html";
import { Container, Heading, Center, HStack, Spinner } from "native-base";

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
		<SafeAreaView>
			<Center>
				{post.length !== 0 ? (
					<Container>
						<ScrollView>
							<Heading>{post.title.rendered}</Heading>
							<RenderHtml
								contentWidth={width}
								source={{ html: post.content.rendered }}
							/>
						</ScrollView>
					</Container>
				) : (
					<HStack space={2} justifyContent="center">
						<Spinner accessibilityLabel="Loading posts" />
						<Heading color="primary.500" fontSize="md">
							Loading
						</Heading>
					</HStack>
				)}
			</Center>
		</SafeAreaView>
	);
};

export default SinglePost;
