import { StyleSheet, View } from "react-native";
import FirstScreen from "./views/FirstScreen";
import Screen1a from "./views/Screen1a";
import Screen1b from "./views/Screen1b";
import Screen1c from "./views/Screen1c";
import Screen1d from "./views/Screen1d";
import Screen1e from "./views/Screen1e";
import Screen2a from "./views/Screen2a";
import XmEyeScreen from "./views/XmEyeScreen";

import {Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
      <Button
        title="Go to FirstScreen"
        onPress={() => navigation.navigate('FirstScreen')}
      />
      <Button
        title="Go to Screen1a"
        onPress={() => navigation.navigate('Screen1a')}
      />
      <Button
        title="Go to Screen1b"
        onPress={() => navigation.navigate('Screen1b')}
      />
      <Button
        title="Go to Screen1c"
        onPress={() => navigation.navigate('Screen1c')}
      />
      <Button
        title="Go to Screen1d"
        onPress={() => navigation.navigate('Screen1d')}
      />
      <Button
        title="Go to Screen1e"
        onPress={() => navigation.navigate('Screen1e')}
      />
      <Button
        title="Go to Screen2a"
        onPress={() => navigation.navigate('Screen2a')}
      />
      <Button
        title="Go to XmEyeScreen"
        onPress={() => navigation.navigate('XmEyeScreen')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ title: 'FirstScreen' }}
        />
        <Stack.Screen
          name="Screen1a"
          component={Screen1a}
          options={{ title: 'Screen1a' }}
        />
        <Stack.Screen
          name="Screen1b"
          component={Screen1b}
          options={{ title: 'Screen1b' }}
        />
        <Stack.Screen
          name="Screen1c"
          component={Screen1c}
          options={{ title: 'Screen1c' }}
        />
        <Stack.Screen
          name="Screen1d"
          component={Screen1d}
          options={{ title: 'Screen1d' }}
        />
        <Stack.Screen
          name="Screen1e"
          component={Screen1e}
          options={{ title: 'Screen1e' }}
        />
        <Stack.Screen
          name="Screen2a"
          component={Screen2a}
          options={{ title: 'Screen2a' }}
        />
        <Stack.Screen
          name="XmEyeScreen"
          component={XmEyeScreen}
          options={{ title: 'XmEyeScreen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}