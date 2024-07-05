// App.tsx
import React from 'react';
import { View, useColorScheme, StyleSheet } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import { StatusBar } from 'expo-status-bar';
import { lightTheme, darkTheme } from './src/theme/styles';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={[styles.container, theme.container]}>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
