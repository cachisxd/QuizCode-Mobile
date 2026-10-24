import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#4C5FD5' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'QuizRush' }} />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={({ route }) => ({ title: route.params?.titulo ?? 'Partida' })}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: 'Resultado', headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
