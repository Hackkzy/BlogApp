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
import moment from "moment/moment";

const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const route = `posts?per_page=10&page=${page}&_fields=id,title,excerpt,date`;
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
    <View
      flex={1}
      px='2'
      alignContent={"center"}
      justifyContent={"center"}
      backgroundColor='#060606'
    >
      <Heading size='md' color='warmGray.200'>
        Posts
      </Heading>
      {posts.length > 0 ? (
        <FlatList
          onEndReached={() => {
            if (!loading && !lastPage) {
              setPage((prevPage) => prevPage + 1);
            }
          }}
          keyExtractor={(item) => item.id.toString()}
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Post", { post_id: item.id })}
            >
              <Box
                rounded='xl'
                overflow='hidden'
                m='2'
                backgroundColor='#2E2B38'
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
              >
                <Box>
                  <AspectRatio w='100%' ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                      }}
                      alt='image'
                    />
                  </AspectRatio>
                </Box>
                <Stack p='4' space={3}>
                  <Stack space={2}>
                    <Heading size='md' ml='-1' color='#FFFFFF'>
                      {item.title.rendered}
                    </Heading>
                  </Stack>
                  <RenderHTML
                    contentWidth={width}
                    source={{
                      html: item.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
                    }}
                    tagsStyles={{ body: { color: "#fff" } }}
                  />
                  <HStack
                    alignItems='center'
                    space={4}
                    justifyContent='space-between'
                  >
                    <HStack alignItems='center'>
                      <Text fontWeight='400' color='warmGray.200'>
                        {moment(item.date, "YYYYMMDD").format("MMMM D, YYYY")}
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Center flex={1} px='3'>
          <HStack space={2} justifyContent='center'>
            <Spinner
              size='lg'
              color='#f92033'
              accessibilityLabel='Loading posts'
            />
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
