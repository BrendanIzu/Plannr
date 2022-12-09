import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, ImageBackground, Screen, ScrollView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import CreateEventScreen from './app/screens/CreateEventScreen';
import EventScreen from './app/screens/EventScreen';
import CreateScreen from './app/screens/CreateScreen';
import CreateGroupScreen from './app/screens/CreateGroupScreen';

const Stack = createNativeStackNavigator();
const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.225:5000' : 'http://10.0.2.2:5000';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        />
        <Stack.Screen
        name="CreateScreen"
        component={CreateScreen}
        />
        <Stack.Screen
        name="CreateEventScreen"
        component={CreateEventScreen}
        />
        <Stack.Screen
        name="CreateGroupScreen"
        component={CreateGroupScreen}
        />
        <Stack.Screen
        name="EventScreen"
        component={EventScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})





