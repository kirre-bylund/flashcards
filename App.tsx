/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/*import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;*/

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

// Define your screens
const SingleOptionGame = () => <View><Text>Single Option Game</Text></View>;
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
