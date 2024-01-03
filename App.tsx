import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type {PropsWithChildren} from 'react';
import { GameScreen, getShuffledWordArray } from "./GameScreen"

// Define your screens
const SingleOptionGame = () => <View><GameScreen optionCount={1} categories={ ["animals"] } language={ "en_US" } currentWordIndex={0} /></View>;
const MultiplayerScreen = () => <View><Text>Multiplayer Screen</Text></View>;
const OptionsScreen = () => <View><Text>Options Screen</Text></View>;

// Main Menu Component
const MainMenu = ({ navigation }) => {
  return (
    <View>
      <Button title="Play" onPress={() => navigation.navigate('Play Menu')} />
      <Button title="Options" onPress={() => navigation.navigate('OptionsScreen')} />
    </View>
  );
};

// Play Menu Component
const PlayMenu = ({ navigation }) => {
  return (
    <View>
      <Button title="Simple Flashcards" onPress={() => navigation.navigate('SingleOptionGame')} />
      <Button title="Multiplayer" onPress={() => navigation.navigate('MultiplayerScreen')} />
    </View>
  );
};

// Create the Stack Navigator
const Stack = createStackNavigator();

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Menu">
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="Play Menu" component={PlayMenu} />
        <Stack.Screen name="SingleOptionGame" component={SingleOptionGame} />
        <Stack.Screen name="MultiplayerScreen" component={MultiplayerScreen} />
        <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
