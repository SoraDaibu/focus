import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Box, Center, NativeBaseProvider } from "native-base"
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";

export default function App() {
  return (
    <NavigationContainer>{


      <View style={styles.container}>
        <Text style={styles.text}>Open up App.tsx to start working on your app📱</Text>
        <Text style={styles.text}>Heyyyy buddy👬</Text>
        <Text style={styles.text}>I am new to React Native🌍</Text>

        <NativeBaseProvider config={config}>
          <Center flex={1} px="3">
            <LinearGradient />
          </Center>
        </NativeBaseProvider>

        <StatusBar style="auto" />
      </View >

    }</NavigationContainer >
  );
}

type HomeNavigationParamList = {
  Home: undefined;
  Notifications: undefined;
};

type HomeScreenNavigationProp = DrawerNavigationProp<
  HomeNavigationParamList,
  "Home"
>;

type NotificationsScreenNavigationProp = DrawerNavigationProp<
  HomeNavigationParamList,
  "Notifications"
>;

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({
  navigation,
}: {
  navigation: NotificationsScreenNavigationProp;
}) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator<HomeNavigationParamList>();



const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}


export const LinearGradient = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}
    >
      This is a Box with Linear Gradient
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});
