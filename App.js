// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterContainer from './src/screens/RegisterContainer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="RegisterContainer" component={RegisterContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;