import { Heading, Text, View } from "native-base";
import React from "react";
import { StatusBar } from "react-native";

const Home = () => {
  return (
    <View flex={1} px='2' py='10' backgroundColor='#060606'>
      <StatusBar barStyle='light-content' />
      <Heading size='md' color='warmGray.200'>
        Home
      </Heading>
    </View>
  );
};

export default Home;
