import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import styled, { css } from '@emotion/native';
import {
  DarkTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LIGHT, DARK } from './colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const isDark = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDark ? DARK : LIGHT}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Text>영화 소개 사이트를 만들 것임!</Text>
          <StatusBar style='auto' />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
