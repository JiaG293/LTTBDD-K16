import { StyleSheet, Text, View, Image, Button } from 'react-native';
import FirstScreen from './views/FirstScreen';
import Screen1a from './views/Screen1a';
import Screen1b from './views/Screen1b';
import Screen1c from './views/Screen1c';
import Screen1d from './views/Screen1d';
import Screen1e from './views/Screen1e';
import Screen2a from './views/Screen2a';
import XmEyeScreen from './views/XmEyeScreen';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen></FirstScreen> */}
      <Screen1a></Screen1a>
      {/* <Screen1b></Screen1b> */}
      {/* <Screen1c></Screen1c> */}
      {/* <Screen1c></Screen1c> */}
      {/* <Screen1d></Screen1d> */}
      {/* <Screen1e></Screen1e> */}
      {/* <Screen2a></Screen2a> */}
      {/* <XmEyeScreen></XmEyeScreen> */}
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={FirstScreen}
          options={{ title: 'Awesome app' }}
        />
        <Stack.Screen
          name="Profile"
          component={Screen1a}
          options={{ title: 'My profile' }}
        />
      </Stack.Navigator> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
