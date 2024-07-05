// src/screens/HistoryScreen.tsx
import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { lightTheme, darkTheme, commonStyles } from '../theme/styles';

const HistoryScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={[commonStyles.container, theme.container]}>
      <Text style={[commonStyles.text, theme.text]}>History Screen</Text>
    </View>
  );
};

export default HistoryScreen;
