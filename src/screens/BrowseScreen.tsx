// src/screens/BrowseScreen.tsx
import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { lightTheme, darkTheme, commonStyles } from '../theme/styles';

const BrowseScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={[commonStyles.container, theme.container]}>
      <Text style={[commonStyles.text, theme.text]}>Browse Screen</Text>
    </View>
  );
};

export default BrowseScreen;
