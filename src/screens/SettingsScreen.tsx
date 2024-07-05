// src/screens/SettingsScreen.tsx
import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { lightTheme, darkTheme, commonStyles } from '../theme/styles';

const SettingsScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={[commonStyles.container, theme.container]}>
      <Text style={[commonStyles.text, theme.text]}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
